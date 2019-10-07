const { User, Authority } = require('../models/index');
const { getType } = require('../utils/index');

// 查找一个Authority
const getOneAuthority = async function(where) {
  return Authority.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

// 创建一个Authority
const createAuthority = async function(whereUser, newAuthority) {
  const user = await User.findOne({
    where: getType(whereUser) === 'Object'? whereUser : {},
  });
  return user.createAuthority(
      getType(newAuthority) === 'Object' ? newAuthority : {},
      {
        fields: Authority.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个Authority
const updateAuthority = async function(whereAuthority, newAuthority) {
  return Authority.update(
      getType(newAuthority) === 'Object' ? newAuthority : {},
      {
        where: getType(whereAuthority) === 'Object'? whereAuthority : {},
        fields: Authority.writableFieldsKeyNamesArray
      }
  );
};

// 删除一个Authority
const deleteAuthority = async function(where) {
  return Authority.destroy({
    where: where,
  });
};

module.exports = { getOneAuthority, createAuthority, updateAuthority, deleteAuthority };