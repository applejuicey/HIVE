const express = require('express');
const router = express.Router();
const { getOneUser } = require('../controllers/UserController');
const { signToken } = require('../token/jwt');

// base: /authentication

// POST /api/authentication/login 用户登录
// req提供如下信息：
// req.body可获取用于登录验证的用户信息
router.post('/login', async function (req, res) {
  let result = {};
  try {
    result = await (async function () {
      // 根据req.body中的信息，从数据库查询并获取当前需要登录的用户
      const user = await getOneUser({
        userEmail: req.body.userEmail,
      });
      // 1.在数据库中查不到该用户
      if (!user) {
        return {
          statusCode: "0",
          error: {
            message: 'email address does not exist',
            errorCode: '0_EMA_DNE',
          },
        };
      }
      // 2.密码不正确
      if (user.userPassword !== req.body.userPassword) {
        return {
          statusCode: "0",
          error: {
            message: 'incorrect password',
            errorCode: '0_INC_PWD',
          },
        };
      }
      // 3.所有检查都通过
      const userInfo = {
        userUUID: user.userUUID,
        userAccountName: user.userAccountName,
        userEmail: user.userEmail,
        authority: user.authority,
      };
      const token = signToken(userInfo);
      return {
        statusCode: "1",
        token: token,
        userInfo: userInfo
      };
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when login: ${error}`,
        errorCode: '0_LOGIN_ERR',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;

