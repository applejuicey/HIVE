const express = require('express');
const router = express.Router();
const { getAllPublications, getOnePublication, createPublication, updatePublication, deletePublication } = require('../controllers/PublicationController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user/publication

// GET /user/publication/all 查询所有publication
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取表示查询哪个用户的publication的用户唯一标识符userUUID
// req.query.offset可获取跳过几个记录
// req.query.limit可获取最多几个记录
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查询自己的所有publication+当前token用户有authorityCanCreateCV权限）
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
      const publications = await getAllPublications(
          parseInt(req.query.offset),
          parseInt(req.query.limit),
          {
            userUserUUID: req.query.userUUID
          }
      );
      return {
        statusCode: "1",
        publications: publications,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find all publications: ${error}`,
        errorCode: '0_GETALL_PUBS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/publication 查询一个publication
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.publicationUUID可获取待查找的publication的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己的publication+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待查看的publication
      const publication = await getOnePublication({
        publicationUUID: req.query.publicationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          currentUser.authority.authorityIsAdmin === false && (publication.userUserUUID !== currentUser.userUUID)
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
        publication: publication,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one publication: ${error}`,
        errorCode: '0_GETONE_PUB',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/publication/ 创建一个publication
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该publication所属的用户的唯一标识符
// req.body.publication中可获取待新增的publication的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在创建自己的publication+当前token用户有authorityCanCreateCV权限）
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
      const createdPublication = await createPublication(
          {
            userUUID: req.query.userUUID,
          },
          req.body.publication
      );
      result = {
        statusCode: "1",
        createdPublication: createdPublication,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one publication: ${error}`,
        errorCode: '0_CREATE_PUB',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/publication/ 更新一个publication
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.publicationUUID可获取该publication的唯一标识符
// req.body.publication中可获取待修改的publication的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在修改自己的publication+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待更新的publication
      const publication = await getOnePublication({
        publicationUUID: req.query.publicationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (publication.userUserUUID !== currentUser.userUUID))
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
      const updatedPublication = await updatePublication(
          { publicationUUID: req.query.publicationUUID },
          req.body.publication
      );
      return {
        statusCode: "1",
        updatedPublication: updatedPublication,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one publication: ${error}`,
        errorCode: '0_UPDATE_PUB',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/publication/ 删除一个publication
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.publicationUUID可获取该publication的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在删除自己的publication+当前token用户有authorityCanCreateCV权限）
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
      const publication = await getOnePublication({
        publicationUUID: req.query.publicationUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (publication.userUserUUID !== currentUser.userUUID))
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
      const deletedPublication = await deletePublication({
        publicationUUID: req.query.publicationUUID
      });
      return {
        statusCode: "1",
        deletedPublication: deletedPublication,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one publication: ${error}`,
        errorCode: '0_DELETE_PUB',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;