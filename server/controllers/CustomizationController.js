const { User, Customization } = require('../models/index');
const { getType } = require('../utils/index');

// 查找某一用户的所有Customization
const getAllCustomizations = async function(offset, limit, whereUser) {
  return Customization.findAndCountAll({
    where: getType(whereUser) === 'Object'? whereUser : {},
    offset: getType(offset) === 'Number' ? Math.round(offset) : 0,
    limit: getType(limit) === 'Number' ? Math.round(limit) : 0,
  });
};

// 查找一个Customization
const getOneCustomization = async function(where) {
  return Customization.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

// 新增一个Customization
const createCustomization = async function(whereUser, newCustomization) {
  const user = await User.findOne({
    where: getType(whereUser) === 'Object'? whereUser : {},
  });
  return user.createCustomization(
      getType(newCustomization) === 'Object' ? newCustomization : {},
      {
        fields: Customization.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个Customization
const updateCustomization = async function(whereCustomization, newCustomization) {
  return Customization.update(
      getType(newCustomization) === 'Object' ? newCustomization : {},
      {
        where: getType(whereCustomization) === 'Object'? whereCustomization : {},
        fields: Customization.writableFieldsKeyNamesArray
      }
  );
};

// 删除一个Customization
const deleteCustomization = async function(where) {
  return Customization.destroy({
    where: where,
  });
};

module.exports = { getAllCustomizations, getOneCustomization, createCustomization, updateCustomization, deleteCustomization };