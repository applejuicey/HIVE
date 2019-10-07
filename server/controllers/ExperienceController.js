const { User, Experience } = require('../models/index');
const { getType } = require('../utils/index');

// 查找某一用户的所有Experience
const getAllExperiences = async function(offset, limit, whereUser) {
  return Experience.findAndCountAll({
    where: getType(whereUser) === 'Object'? whereUser : {},
    offset: getType(offset) === 'Number' ? Math.round(offset) : 0,
    limit: getType(limit) === 'Number' ? Math.round(limit) : 0,
  });
};

// 查找一个Experience
const getOneExperience = async function(where) {
  return Experience.findOne({
    where: getType(where) === 'Object'? where : {}
  });
};

// 新增一个Experience
const createExperience = async function(whereUser, newExperience) {
  const user = await User.findOne({
    where: getType(whereUser) === 'Object'? whereUser : {},
  });
  return user.createExperience(
      getType(newExperience) === 'Object' ? newExperience : {},
      {
        fields: Experience.writableFieldsKeyNamesArray
      }
  );
};

// 修改一个Experience
const updateExperience = async function(whereExperience, newExperience) {
  return Experience.update(
      getType(newExperience) === 'Object' ? newExperience : {},
      {
        where: getType(whereExperience) === 'Object'? whereExperience : {},
        fields: Experience.writableFieldsKeyNamesArray
      }
  );
};

// 删除一个Experience
const deleteExperience = async function(where) {
  return Experience.destroy({
    where: where,
  });
};

module.exports = { getAllExperiences, getOneExperience, createExperience, updateExperience, deleteExperience };