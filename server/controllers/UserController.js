const { User, Authority, GeneralInformation, Experience, Publication, Customization } = require('../models/index');
const { getType } = require('../utils/index');

const getIncludeArray = function () {
  return [
    {
      model: Authority,
      as: 'authority',
    },
    {
      model: GeneralInformation,
      as: 'generalInformation',
    },
    {
      model: Experience,
      as: 'experiences',
    },
    {
      model: Publication,
      as: 'publications',
    },
    {
      model: Customization,
      as: 'customizations',
    },
  ];
};

// 查找所有用户，根据offset和limit返回用户数据（包括子表的字段）
const getAllUsers = async function(offset, limit) {
   return User.findAndCountAll({
     distinct: true,
     offset: getType(offset) === 'Number' ? Math.round(offset) : 0,
     limit: getType(limit) === 'Number' ? Math.round(limit) : 0,
     include: getIncludeArray()
   });
};

// 查找一个User
const getOneUser = async function(where) {
  return User.findOne({
    where: getType(where) === 'Object'? where : {},
    include: getIncludeArray(),
  });
};

// 创建一个User
const createUser = async function(newUser) {
  return User.create(
      getType(newUser) === 'Object' ? newUser : {},
      {
        fields: User.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个User
const updateUser = async function(where, newUserInformation) {
  return User.update(
      getType(newUserInformation) === 'Object'? newUserInformation : {},
      {
        where: where,
        fields: User.writableFieldsKeyNamesArray,
      }
  );
};

// 删除一个User
const deleteUser = async function(where) {
  return User.destroy({
    where: where,
  });
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };