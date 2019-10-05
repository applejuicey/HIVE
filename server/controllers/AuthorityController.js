const { User, Authority } = require('../models/index');
const { getType } = require('../utils/index');

const getOneAuthority = async function(where) {
  return Authority.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

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

const updateAuthority = async function(whereAuthority, newAuthority) {
  return Authority.update(
      getType(newAuthority) === 'Object' ? newAuthority : {},
      {
        where: getType(whereAuthority) === 'Object'? whereAuthority : {},
        fields: Authority.writableFieldsKeyNamesArray
      }
  );
};

const deleteAuthority = async function(where) {
  return Authority.destroy({
    where: where,
  });
};

module.exports = { getOneAuthority, createAuthority, updateAuthority, deleteAuthority };