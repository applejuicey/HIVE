const express = require('express');
const router = express.Router();
const { getOneUser } = require('../controllers/UserController');
const { getOneAuthority, createAuthority, updateAuthority, deleteAuthority } = require('../controllers/AuthorityController');
const { jwt, PRIVATEKEY } = require('../token/jwt');

// base: /user/authority/

// GET /user/authority/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待查询的权限的唯一标识authorityUserUUID
router.get('/', async function (req, res) {
  let result = {};
  let decodedCurrentUser = {};
  try {
    decodedCurrentUser = jwt.verify(req.get('Authorization'), PRIVATEKEY);
  } catch (error) {
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: '0_INV_JWT',
      },
    };
    res.json(result);
    return;
  }
  try {
    const currentUser = await getOneUser ({
      userUUID: decodedCurrentUser.userUUID
    });
    if (currentUser) {
      // 当前用户存在
      if (currentUser.authority.authorityIsAdmin) {
        // 当前用户isAdmin为true
        const authority = await getOneAuthority({
          authorityUserUUID: req.query.authorityUserUUID
        });
        result = {
          statusCode: "1",
          authority: authority,
        };
      } else {
        // 当前用户isAdmin为false
        result = {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          },
        };
      }
    } else {
      // 当前用户不存在
      result = {
        statusCode: "0",
        error: {
          message: 'userID does not exist',
          errorCode: '0_UID_DNE',
        },
      };
    }
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `find one authority error: ${error}`,
        errorCode: '0_GETONE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/authority/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待新增的权限隶属的USER的唯一标识userUUID
// 需要在req.body中提供表示待新增的权限的JSON数据
router.post('/', async function (req, res) {
  let result = {};
  let decodedCurrentUser = {};
  try {
    decodedCurrentUser = jwt.verify(req.get('Authorization'), PRIVATEKEY);
  } catch (error) {
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: '0_INV_JWT',
      },
    };
    res.json(result);
    return;
  }
  try {
    const currentUser = await getOneUser({
      userUUID: decodedCurrentUser.userUUID
    });
    if (currentUser) {
      // 当前用户存在
      if (currentUser.authority.authorityIsAdmin) {
        // 当前用户isAdmin为true
        const createdAuthority = await createAuthority(
            {
              userUUID: req.query.userUUID,
            },
            req.body
        );
        result = {
          statusCode: "1",
          createdAuthority: createdAuthority,
        };
      } else {
        // 当前用户isAdmin为false
        result = {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          },
        };
      }
    } else {
      // 当前用户不存在
      result = {
        statusCode: "0",
        error: {
          message: 'userID does not exist',
          errorCode: '0_UID_DNE',
        },
      };
    }
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `create authority error: ${error}`,
        errorCode: '0_CREATE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/authority/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待修改的权限的唯一标识authorityUserUUID
// 需要在req.body中提供表示待修改的权限的JSON数据
router.put('/', async function (req, res) {
  let result = {};
  let decodedCurrentUser = {};
  try {
    decodedCurrentUser = jwt.verify(req.get('Authorization'), PRIVATEKEY);
  } catch (error) {
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: '0_INV_JWT',
      },
    };
    res.json(result);
    return;
  }
  try {
    const currentUser = await getOneUser({
      userUUID: decodedCurrentUser.userUUID
    });
    if (currentUser) {
      // 当前用户存在
      if (currentUser.authority.authorityIsAdmin) {
        // 当前用户isAdmin为true
        const updatedAuthority = await updateAuthority(
            { authorityUUID: req.query.authorityUUID },
            req.body
        );
        result = {
          statusCode: "1",
          updatedAuthority: updatedAuthority,
        };
      } else {
        // 当前用户isAdmin为false
        result = {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          },
        };
      }
    } else {
      // 当前用户不存在
      result = {
        statusCode: "0",
        error: {
          message: 'userID does not exist',
          errorCode: '0_UID_DNE',
        },
      };
    }
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `update authority error: ${error}`,
        errorCode: '0_UPDATE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/authority/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待删除的权限的唯一标识authorityUserUUID
router.delete('/', async function (req, res) {
  let result = {};
  let decodedCurrentUser = {};
  try {
    decodedCurrentUser = jwt.verify(req.get('Authorization'), PRIVATEKEY);
  } catch (error) {
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: '0_INV_JWT',
      },
    };
    res.json(result);
    return;
  }
  try {
    const currentUser = await getOneUser({
      userUUID: decodedCurrentUser.userUUID
    });
    if (currentUser) {
      // 当前用户存在
      if (currentUser.authority.authorityIsAdmin) {
        // 当前用户isAdmin为true
        const deletedAuthority = await deleteAuthority({
          authorityUUID: req.query.authorityUUID
        });
        result = {
          statusCode: "1",
          deletedAuthority: deletedAuthority,
        };
      } else {
        // 当前用户isAdmin为false
        result = {
          statusCode: "0",
          error: {
            message: 'not enough permission',
            errorCode: '0_PMS_DNE',
          },
        };
      }
    } else {
      // 当前用户不存在
      result = {
        statusCode: "0",
        error: {
          message: 'userID does not exist',
          errorCode: '0_UID_DNE',
        },
      };
    }
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: `delete authority error: ${error}`,
        errorCode: '0_DELETE_AUTH',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;