const { User, GeneralInformation } = require('../models/index');
const { getType } = require('../utils/index');

// 查找一个GeneralInformation
const getOneGeneralInformation = async function(where) {
  return GeneralInformation.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

// 创建一个GeneralInformation
const createGeneralInformation = async function(whereUser, newGeneralInformation) {
  const user = await User.findOne({
    where: getType(whereUser) === 'Object'? whereUser : {},
  });
  return user.createGeneralInformation(
      getType(newGeneralInformation) === 'Object' ? newGeneralInformation : {},
      {
        fields: GeneralInformation.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个GeneralInformation
const updateGeneralInformation = async function(whereGeneralInformation, newGeneralInformation) {
  return GeneralInformation.update(
      getType(newGeneralInformation) === 'Object' ? newGeneralInformation : {},
      {
        where: getType(whereGeneralInformation) === 'Object'? whereGeneralInformation : {},
        fields: GeneralInformation.writableFieldsKeyNamesArray
      }
  );
};

// 删除一个GeneralInformation
const deleteGeneralInformation = async function(where) {
  return GeneralInformation.destroy({
    where: where,
  });
};

module.exports = { getOneGeneralInformation, createGeneralInformation, updateGeneralInformation, deleteGeneralInformation };