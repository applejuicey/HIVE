const express = require('express');
const router = express.Router();
const { getOneUser } = require('../controllers/UserController');
const { jwt, PRIVATEKEY } = require('../token/jwt');

// base: /authentication

// POST /api/authentication/login
router.post('/login', async function (req, res) {
  let result = {};
  try {
    const user = await getOneUser({
      userEmail: req.body.userEmail,
    });
    if (user) {
      // 用户存在
      if (user.userPassword === req.body.userPassword) {
        // 密码正确
        const userInfo = {
          userUUID: user.userUUID,
          userAccountName: user.userAccountName,
          userEmail: user.userEmail,
          authority: user.authority,
          experiences: user.experiences,
        };
        const token = jwt.sign(userInfo, PRIVATEKEY, { expiresIn: '24h' });
        result = {
          statusCode: "1",
          token: token,
          userInfo: userInfo
        };
      } else {
        // password incorrect
        result = {
          statusCode: "0",
          error: {
            message: 'Incorrect password',
            errorCode: '0_INC_PWD',
          },
        };
      }
    } else {
      // email doesn't exist
      result = {
        statusCode: "0",
        error: {
          message: 'Email address does not exist',
          errorCode: '0_EMA_DNE',
        },
      };
    }
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `login error: ${error}`,
        errorCode: '0_LOG_ERR',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;

