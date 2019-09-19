const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByID, createUser, updateUserByID, deleteUserByID } = require('../controllers/UserController');

// base: /user

// GET /user/all
router.get('/all', async function (req, res) {
  let result = {};
  try {
    const users = await getAllUsers();
    result = {
      statusCode: "1",
      users: users,
    };
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: 'GETALLUSERS',
      },
    };
  } finally {
    res.json(result);
  }
});

// GET /user/:userID
router.get('/:userID', async function (req, res) {
  let result = {};
  try {
    const user = await getUserByID(req.params);
    result = {
      statusCode: "1",
      user: user,
    };
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: 'GETUSERBYID',
      },
    };
  } finally {
    res.json(result);
  }
});

// POST /user/
router.post('/', async function (req, res) {
  let result = {};
  try {
    const user = await createUser(req.body);
    result = {
      statusCode: "1",
      user: user,
    };
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: 'CREATEUSER',
      },
    };
  } finally {
    res.json(result);
  }
});

// PUT /user/
router.put('/', async function (req, res) {
  let result = {};
  try {
    const user = await updateUserByID(req.body);
    result = {
      statusCode: "1",
      user: user,
    };
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: 'UPDATEUSER',
      },
    };
  } finally {
    res.json(result);
  }
});

// DELETE /user/:userID
router.delete('/:userID', async function (req, res) {
  let result = {};
  try {
    const user = await deleteUserByID(req.params);
    result = {
      statusCode: "1",
      user: user,
    };
  } catch (error) {
    console.error(error);
    result = {
      statusCode: "0",
      error: {
        message: error,
        errorCode: 'DELETEUSER',
      },
    };
  } finally {
    res.json(result);
  }
});

module.exports = router;

