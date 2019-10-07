const express = require('express');
const router = express.Router();
const { getOneAuthority, createAuthority, updateAuthority, deleteAuthority } = require('../controllers/AuthorityController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user/authority/

// GET /user/authority/ 查询一个authority
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.authorityUUID可获取待查找的authority的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己的authority）
router.get('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = verifyAndGetUser(req.get('Authorization'));
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
      // 从数据库中取出待查看的authority
      const authority = await getOneAuthority({
        authorityUUID: req.query.authorityUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityIsAdmin === false && (authority.authorityUserUUID !== currentUser.userUUID)
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
        authority: authority,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one authority: ${error}`,
        errorCode: '0_GETONE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/authority/ 创建一个authority
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该authority所属的用户的唯一标识符
// req.body.authority中可获取待新增的authority的JSON数据
// 权限要求：仅（当前token用户authorityIsAdmin为true）
router.post('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = verifyAndGetUser(req.get('Authorization'));
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
      const createdAuthority = await createAuthority(
          {
            userUUID: req.query.userUUID,
          },
          req.body.authority
      );
      return {
        statusCode: "1",
        createdAuthority: createdAuthority,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one authority: ${error}`,
        errorCode: '0_CREATE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/authority/ 更新一个authority
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.authorityUUID可获取该authority的唯一标识符
// req.body.authority中可获取待修改的authority的JSON数据
// 权限要求：仅（当前token用户authorityIsAdmin为true）
router.put('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = verifyAndGetUser(req.get('Authorization'));
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
      const updatedAuthority = await updateAuthority(
          { authorityUUID: req.query.authorityUUID },
          req.body.authority
      );
      return {
        statusCode: "1",
        updatedAuthority: updatedAuthority,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one authority: ${error}`,
        errorCode: '0_UPDATE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/authority/ 删除一个authority
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.authorityUUID可获取该authority的唯一标识符
// 权限要求：仅（当前token用户authorityIsAdmin为true）
router.delete('/', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 解析token
      const tokenVerificationResult = verifyAndGetUser(req.get('Authorization'));
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
      const deletedAuthority = await deleteAuthority({
        authorityUUID: req.query.authorityUUID
      });
      return {
        statusCode: "1",
        deletedAuthority: deletedAuthority,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one authority: ${error}`,
        errorCode: '0_DELETE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;