const express = require('express');
const router = express.Router();
const { getOneGeneralInformation, createGeneralInformation, updateGeneralInformation, deleteGeneralInformation } = require('../controllers/GeneralInformationController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user/generalInformation/

// GET /user/generalInformation/ 查询一个generalInformation
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.generalInformationUUID可获取待查找的generalInformation的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己的generalInformation+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待查看的generalInformation
      const generalInformation = await getOneGeneralInformation({
        generalInformationUUID: req.query.generalInformationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (generalInformation.generalInformationUserUUID !== currentUser.userUUID))
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
        generalInformation: generalInformation,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one generalInformation: ${error}`,
        errorCode: '0_GETONE_GINF',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/generalInformation/ 创建一个generalInformation
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该generalInformation所属的用户的唯一标识符
// req.body.generalInformation中可获取待新增的generalInformation的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在创建自己的generalInformation+当前token用户有authorityCanCreateCV权限）
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
      const createdGeneralInformation = await createGeneralInformation(
          {
            userUUID: req.query.userUUID,
          },
          req.body.generalInformation
      );
      return {
        statusCode: "1",
        createdGeneralInformation: createdGeneralInformation,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one generalInformation: ${error}`,
        errorCode: '0_CREATE_GINF',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/generalInformation/ 更新一个generalInformation
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.generalInformationUUID可获取该generalInformation的唯一标识符
// req.body.generalInformation中可获取待修改的generalInformation的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在修改自己的generalInformation+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待更新的generalInformation
      const generalInformation = await getOneGeneralInformation({
        generalInformationUUID: req.query.generalInformationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (generalInformation.generalInformationUserUUID !== currentUser.userUUID))
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
      const updatedGeneralInformation = await updateGeneralInformation(
          { generalInformationUUID: req.query.generalInformationUUID },
          req.body.generalInformation
      );
      return {
        statusCode: "1",
        updatedGeneralInformation: updatedGeneralInformation,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one generalInformation: ${error}`,
        errorCode: '0_UPDATE_GINF',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/generalInformation/ 删除一个generalInformation
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.generalInformationUUID可获取该generalInformation的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在删除自己的generalInformation+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待删除的generalInformation
      const generalInformation = await getOneGeneralInformation({
        generalInformationUUID: req.query.generalInformationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (generalInformation.generalInformationUserUUID !== currentUser.userUUID))
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
      const deletedGeneralInformation = await deleteGeneralInformation({
        generalInformationUUID: req.query.generalInformationUUID
      });
      return {
        statusCode: "1",
        deletedGeneralInformation: deletedGeneralInformation,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one generalInformation: ${error}`,
        errorCode: '0_DELETE_GINF',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;