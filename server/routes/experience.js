const express = require('express');
const router = express.Router();
const { getAllExperiences, getOneExperience, createExperience, updateExperience, deleteExperience } = require('../controllers/ExperienceController');
const { verifyAndGetUser } = require('../token/jwt');

// base: /user/experience

// GET /user/experience/all 查询所有experience
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取表示查询哪个用户的experience的用户唯一标识符userUUID
// req.query.offset可获取跳过几个记录
// req.query.limit可获取最多几个记录
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查询自己的所有experience+当前token用户有authorityCanCreateCV权限）
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
      const experiences = await getAllExperiences(
          parseInt(req.query.offset),
          parseInt(req.query.limit),
          {
            userUserUUID: req.query.userUUID
          }
      );
      return {
        statusCode: "1",
        experiences: experiences,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find all experiences: ${error}`,
        errorCode: '0_GETALL_EXPS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/experience 查询一个experience
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.experienceUUID可获取待查找的experience的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在查看自己的experience+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待查看的experience
      const experience = await getOneExperience({
        experienceUUID: req.query.experienceUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          currentUser.authority.authorityIsAdmin === false && (experience.userUserUUID !== currentUser.userUUID)
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
      return  {
        statusCode: "1",
        experience: experience,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when find one experience: ${error}`,
        errorCode: '0_GETONE_EXP',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/experience/ 创建一个experience
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.userUUID可获取该experience所属的用户的唯一标识符
// req.body.experience中可获取待新增的experience的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在创建自己的experience+当前token用户有authorityCanCreateCV权限）
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
      const createdExperience = await createExperience(
          {
            userUUID: req.query.userUUID,
          },
          req.body.experience
      );
      return {
        statusCode: "1",
        createdExperience: createdExperience,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when create one experience: ${error}`,
        errorCode: '0_CREATE_EXP',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/experience/ 更新一个experience
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.experienceUUID可获取该experience的唯一标识符
// req.body.experience中可获取待修改的experience的JSON数据
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在修改自己的experience+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待更新的experience
      const experience = await getOneExperience({
        experienceUUID: req.query.experienceUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (experience.userUserUUID !== currentUser.userUUID))
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
      const updatedExperience = await updateExperience(
          { experienceUUID: req.query.experienceUUID },
          req.body.experience
      );
      return {
        statusCode: "1",
        updatedExperience: updatedExperience,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when update one experience: ${error}`,
        errorCode: '0_UPDATE_EXP',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/experience/ 删除一个experience
// req提供如下信息：
// req.get('Authorization')可获取token
// req.query.experienceUUID可获取该experience的唯一标识符
// 权限要求：（当前token用户authorityIsAdmin为true）或者（当前token用户在删除自己的experience+当前token用户有authorityCanCreateCV权限）
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
      // 从数据库中取出待删除的experience
      const experience = await getOneExperience({
        experienceUUID: req.query.experienceUUID
      });
      // 2.当前用户无足够权限
      if (
          currentUser.authority.authorityCanCreateCV === false ||
          (currentUser.authority.authorityIsAdmin === false && (experience.userUserUUID !== currentUser.userUUID))
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
      const deletedExperience = await deleteExperience({
        experienceUUID: req.query.experienceUUID
      });
      return {
        statusCode: "1",
        deletedExperience: deletedExperience,
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when delete one experience: ${error}`,
        errorCode: '0_DELETE_EXP',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;