const User = require('../models/User');

const getAllUsers = async function() {
  return User.findAll();
};

const getUserByID = async function(reqParams) {
  return User.findOne({
    where: {
      id: reqParams.userID
    }
  });
};

const createUser = async function(reqBody) {
  return User.create(reqBody.writableFields, {
    fields: User.writableFieldsKeyNamesArray,
  });
};

const updateUserByID = async function(reqBody) {
  return User.update(reqBody.writableFields, {
    where: {
      id: reqBody.userID
    },
    fields: User.writableFieldsKeyNamesArray,
  });
};

const deleteUserByID = async function(reqParams) {
  return User.destroy({
    where: {
      id: reqParams.userID
    },
  });
};

module.exports = { getAllUsers, getUserByID, createUser, updateUserByID, deleteUserByID };