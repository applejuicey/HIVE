const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/UserController');
const { jwt, PRIVATEKEY } = require('../token/jwt');

// base: /user

// GET /user/all
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供跳过几个记录offset和此次查询的记录上限数limit
router.get('/all', async function (req, res) {
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
        const users = await getAllUsers(
            parseInt(req.query.offset),
            parseInt(req.query.limit),
        );
        result = {
          statusCode: "1",
          users: users,
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
        message: `find all users error: ${error}`,
        errorCode: '0_GETALL_USERS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待查询的用户的唯一标识userUUID
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
    const currentUser = await getOneUser({
      userUUID: decodedCurrentUser.userUUID
    });
    if (currentUser) {
      // 当前用户存在
      if (currentUser.authority.authorityIsAdmin) {
        // 当前用户isAdmin为true
        const user = await getOneUser({
          userUUID: req.query.userUUID
        });
        result = {
          statusCode: "1",
          users: user,
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
        message: `find one user error: ${error}`,
        errorCode: '0_GETONE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/
// 验证token，查看authorityIsAdmin权限
// 需要在req.body中提供表示待新增的用户的JSON数据
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
        const createdUser = await createUser(req.body);
        result = {
          statusCode: "1",
          user: createdUser,
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
        message: `create user error: ${error}`,
        errorCode: '0_CREATE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待修改的用户的唯一标识userUUID
// 需要在req.body中提供表示待修改的用户的JSON数据
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
        const updatedUser = await updateUser(
            { userUUID: req.query.userUUID },
            req.body
        );
        result = {
          statusCode: "1",
          user: updatedUser,
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
        message: `update user error: ${error}`,
        errorCode: '0_UPDATE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/
// 验证token，查看authorityIsAdmin权限
// 需要在req.query中提供待删除的用户的唯一标识userUUID
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
        const deletedUser = await deleteUser({
          userUUID: req.query.userUUID
        });
        result = {
          statusCode: "1",
          user: deletedUser,
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
        message: `delete user error: ${error}`,
        errorCode: '0_DELETE_USER',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;