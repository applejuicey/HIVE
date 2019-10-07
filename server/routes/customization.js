const express = require('express');
const router = express.Router();
const { getAllCustomizations, getOneCustomization, createCustomization, updateCustomization, deleteCustomization } = require('../controllers/CustomizationController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user/customization

// GET /user/customization/all 查询所有customization
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取表示查询哪个用户的customization的用户唯一标识符userUUID
// req.query.offset可获取跳过几个记录
// req.query.limit可获取最多几个记录
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查询自己的所有customization+当前token用户有authorityCanCreateCV权限）
router.get('/all', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = await verifyAndGetUser(req.get('Authorization'));
      // 1.token无效
      if (!tokenVerificationResult.valid) {
        return {
          statusCode: "0",
          error: {
            message: tokenVerificationResult.errorMessage,
            errorCode: '0_INV_JWT',
          },
        };
      }
      const currentUser = tokenVerificationResult.currentUser;
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          currentUser.authority.authorityIsAdmin === false && (req.query.userUUID !== currentUser.userUUID)
      ) {
        return {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          }
        };
      }
      // 3.所有检查都通过
      const customizations = await getAllCustomizations(
          parseInt(req.query.offset),
          parseInt(req.query.limit),
          {
            userUserUUID: req.query.userUUID
          }
      );
      return {
        statusCode: "1",
        customizations: customizations,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find all customizations: ${error}`,
        errorCode: '0_GETALL_CUSTS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/customization 查询一个customization
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.customizationUUID可获取待查找的customization的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己的customization+当前token用户有authorityCanCreateCV权限）
router.get('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = await verifyAndGetUser(req.get('Authorization'));
      // 1.token无效
      if (!tokenVerificationResult.valid) {
        return {
          statusCode: "0",
          error: {
            message: tokenVerificationResult.errorMessage,
            errorCode: '0_INV_JWT',
          },
        };
      }
      const currentUser = tokenVerificationResult.currentUser;
      // 从数据库中取出待查看的customization
      const customization = await getOneCustomization({
        customizationUUID: req.query.customizationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          currentUser.authority.authorityIsAdmin === false && (customization.userUserUUID !== currentUser.userUUID)
      ) {
        return {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          }
        };
      }
      // 3.所有检查都通过
      return {
        statusCode: "1",
        customization: customization,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one customization: ${error}`,
        errorCode: '0_GETONE_CUST',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/customization/ 创建一个customization
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该customization所属的用户的唯一标识符
// req.body.customization中可获取待新增的customization的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在创建自己的customization+当前token用户有authorityCanCreateCV权限）
router.post('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = await verifyAndGetUser(req.get('Authorization'));
      // 1.token无效
      if (!tokenVerificationResult.valid) {
        return {
          statusCode: "0",
          error: {
            message: tokenVerificationResult.errorMessage,
            errorCode: '0_INV_JWT',
          },
        };
      }
      const currentUser = tokenVerificationResult.currentUser;
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (req.query.userUUID !== currentUser.userUUID))
      ) {
        return {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          }
        };
      }
      // 3.所有检查都通过
      const createdCustomization = await createCustomization(
          {
            userUUID: req.query.userUUID,
          },
          req.body.customization
      );
      return  {
        statusCode: "1",
        createdCustomization: createdCustomization,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one customization: ${error}`,
        errorCode: '0_CREATE_CUST',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/customization
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待修改的自定义项的唯一标识customizationUUID
// 需要在req.body中提供表示待修改的自定义项的JSON数据

// PUT /user/customization/ 更新一个customization
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.customizationUUID可获取该customization的唯一标识符
// req.body.customization中可获取待修改的customization的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在修改自己的customization+当前token用户有authorityCanCreateCV权限）
router.put('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = await verifyAndGetUser(req.get('Authorization'));
      // 1.token无效
      if (!tokenVerificationResult.valid) {
        return {
          statusCode: "0",
          error: {
            message: tokenVerificationResult.errorMessage,
            errorCode: '0_INV_JWT',
          },
        };
      }
      const currentUser = tokenVerificationResult.currentUser;
      // 从数据库中取出待更新的customization
      const customization = await getOneCustomization({
        customizationUUID: req.query.customizationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (customization.userUserUUID !== currentUser.userUUID))
      ) {
        return {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          }
        };
      }
      // 3.所有检查都通过
      const updatedCustomization = await updateCustomization(
          { customizationUUID: req.query.customizationUUID },
          req.body.customization
      );
      return {
        statusCode: "1",
        updatedCustomization: updatedCustomization,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one customization: ${error}`,
        errorCode: '0_UPDATE_CUST',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/customization/ 删除一个customization
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.customizationUUID可获取该customization的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在删除自己的customization+当前token用户有authorityCanCreateCV权限）
router.delete('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = await verifyAndGetUser(req.get('Authorization'));
      // 1.token无效
      if (!tokenVerificationResult.valid) {
        return {
          statusCode: "0",
          error: {
            message: tokenVerificationResult.errorMessage,
            errorCode: '0_INV_JWT',
          },
        };
      }
      const currentUser = tokenVerificationResult.currentUser;
      // 从数据库中取出待删除的customization
      const customization = await getOneCustomization({
        customizationUUID: req.query.customizationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (customization.userUserUUID !== currentUser.userUUID))
      ) {
        return {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          }
        };
      }
      // 3.所有检查都通过
      const deletedCustomization = await deleteCustomization({
        customizationUUID: req.query.customizationUUID
      });
      return {
        statusCode: "1",
        deletedCustomization: deletedCustomization,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one customization: ${error}`,
        errorCode: '0_DELETE_CUST',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;