const { User, Publication } = require('../models/index');
const { getType } = require('../utils/index');

// 查找某一用户的所有Publication
const getAllPublications = async function(offset, limit, whereUser) {
  return Publication.findAndCountAll({
    where: getType(whereUser) === 'Object'? whereUser : {},
    offset: getType(offset) === 'Number' ? Math.round(offset) : 0,
    limit: getType(limit) === 'Number' ? Math.round(limit) : 0,
  });
};

// 查找一个Publication
const getOnePublication = async function(where) {
  return Publication.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

// 新增一个Publication
const createPublication = async function(whereUser, newPublication) {
  const user = await User.findOne({
    where: getType(whereUser) === 'Object'? whereUser : {},
  });
  return user.createPublication(
      getType(newPublication) === 'Object' ? newPublication : {},
      {
        fields: Publication.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个Customization
const updatePublication = async function(wherePublication, newPublication) {
  return Publication.update(
      getType(newPublication) === 'Object' ? newPublication : {},
      {
        where: getType(wherePublication) === 'Object'? wherePublication : {},
        fields: Publication.writableFieldsKeyNamesArray
      }
  );
};

// 删除一个Publication
const deletePublication = async function(where) {
  return Publication.destroy({
    where: where,
  });
};

module.exports = { getAllPublications, getOnePublication, createPublication, updatePublication, deletePublication };