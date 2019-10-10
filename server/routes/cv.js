const fs = require('fs');
const express = require('express');
const router = express.Router();
const { getOneUser } = require('../controllers/UserController');
const accessCodeArray4FY = ['V3WN9', '43TC5', 'NWFQC', 'KRV3Q'];
const accessCodeArray4HTT = ['8FPQD', 'JK6QM', 'HVC8X', 'QFKTQ'];

// base: /cv

// GET /cv 查询一个cv
// req提供如下信息：
// req.query.accessCode可获取访问码
router.get('/', async function (req, res) {
  let result = {};
  let record = JSON.stringify({
    ipAddress: req.ip,
    time: new Date().getTime(),
    code: req.query.accessCode,
  }) + '\n';
  fs.appendFile('../accessRecord.txt', record, 'utf-8', (error) => {
    if (error) {
      console.error(error);
      return false;
    }
  });
  try {
    result = await (async function () {
      // 解析accessCode
      if (accessCodeArray4FY.includes(req.query.accessCode)) {
        // FY
        const user = await getOneUser({
          userUUID: '367246d3-a7a2-4eaf-afc3-05d591c92f5b'
        });
        return {
          statusCode: "1",
          user: user,
        };
      } else if (accessCodeArray4HTT.includes(req.query.accessCode)) {
        // HTT
        const user = await getOneUser({
          userUUID: '3f725360-a077-4866-b21d-5a9e9f5b683b'
        });
        return {
          statusCode: "1",
          user: user,
        };
      } else {
        // 无效
        return {
          statusCode: "0",
          error: {
            message: 'invalid access code',
            errorCode: '0_INV_ACC',
          },
        };
      }
    }) ();
  } catch (error) {
    // 未知错误
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `unknown error when get one cv: ${error}`,
        errorCode: '0_GETONE_CV',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;