const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/UserController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user

// GET /user/all 查询所有user
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.offset可获取跳过几个记录
// req.query.limit可获取最多几个记录
// 权限要求：仅（当前token用户authorityIsAdmin为true）
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
          currentUser.authority.authorityIsAdmin === false
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
      const users = await getAllUsers(
          parseInt(req.query.offset),
          parseInt(req.query.limit),
      );
      return {
        statusCode: "1",
        users: users,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find all users: ${error}`,
        errorCode: '0_GETALL_USERS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/ 查询一个user
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取待查找的user的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己）
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
      // 从数据库中取出待查询的user
      const user = await getOneUser({
        userUUID: req.query.userUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityIsAdmin === false && (user.userUUID !== currentUser.userUUID)
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
        user: user,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one user: ${error}`,
        errorCode: '0_GETONE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/ 创建一个user
// req提供如下信息：
// req.get('Authorization')可获取token
// req.body.user中可获取待新增的user的JSON数据
// 权限要求：仅（当前token用户authorityIsAdmin为true）
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
          currentUser.authority.authorityIsAdmin === false
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
      const createdUser = await createUser(req.body.user);
      return {
        statusCode: "1",
        createdUser: createdUser,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one user: ${error}`,
        errorCode: '0_CREATE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/ 更新一个user
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该user的唯一标识符
// req.body.user中可获取待修改的user的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在修改自己的数据）
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
      // 2.当前用户无足够权限
      if (
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
      const updatedUser = await updateUser(
          { userUUID: req.query.userUUID },
          req.body.user
      );
      return {
        statusCode: "1",
        updatedUser: updatedUser,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one user: ${error}`,
        errorCode: '0_UPDATE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/ 删除一个user
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该user的唯一标识符
// 权限要求：仅（当前token用户authorityIsAdmin为true）
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
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityIsAdmin === false
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
      const deletedUser = await deleteUser({
        userUUID: req.query.userUUID
      });
      return {
        statusCode: "1",
        deletedUser: deletedUser,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one user: ${error}`,
        errorCode: '0_DELETE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;