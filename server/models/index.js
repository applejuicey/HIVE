const sequelize = require('../database/sequelize');
const { USER1DATA, USER2DATA } = require('../config/private');
// 引入Models
const User = require('./User');
const Authority = require('./Authority');
const GeneralInformation = require('./GeneralInformation');
const Experience = require('./Experience');
const Publication = require('./Publication');
const Customization = require('./Customization');

// ASSOCIATIONS：sequelize规定函数被调用的模型为source，被作为函数参数传递的模型为target，

// 主表为User表，从表为authority表；向authority表中添加authorityUserUUID列
// User实例对象将拥有get\set\createAuthority方法
User.Authority = User.hasOne(Authority, {as: 'authority'});
// 主表为User表，从表为generalInformation表；向generalInformation表中添加generalInformationUserUUID列
// User实例对象将拥有get\set\createGeneralInformation方法
User.GeneralInformation = User.hasOne(GeneralInformation, {as: 'generalInformation'});
// 主表为User表，从表为experience表；向experience表中添加userUserUUID列
// User实例对象将拥有get\set\createExperience方法
User.Experience = User.hasMany(Experience, {as: 'experiences'});
// 主表为User表，从表为publication表；向publication表中添加userUserUUID列
// User实例对象将拥有get\set\createPublication方法
User.Publication = User.hasMany(Publication, {as: 'publications'});
// 主表为User表，从表为customization表；向customization表中添加userUserUUID列
// User实例对象将拥有get\set\createCustomization方法
User.Customization = User.hasMany(Customization, {as: 'customizations'});

// 首次运行需要创建数据表并初始化
// const needInitialization = true;
const needInitialization = false;
if (needInitialization) {
  sequelize.sync({
    force: true
  }).then(async () => {
    console.log('数据表创建完毕，开始写入初始值...');
    const user1 = await User.create(USER1DATA.userTableData);
    user1.createAuthority(USER1DATA.authorityTableData);
    user1.createGeneralInformation(USER1DATA.generalInformationTableData);
    user1.createExperience(USER1DATA.experienceTableData_1);
    user1.createExperience(USER1DATA.experienceTableData_2);
    user1.createExperience(USER1DATA.experienceTableData_3);
    user1.createPublication(USER1DATA.publicationTableData_1);
    const user2 = await User.create(USER2DATA.userTableData);
    user2.createAuthority(USER2DATA.authorityTableData);
    user2.createGeneralInformation(USER2DATA.generalInformationTableData);
    user2.createExperience(USER2DATA.experienceTableData_1);
    user2.createExperience(USER2DATA.experienceTableData_2);
    user2.createExperience(USER2DATA.experienceTableData_3);
    user2.createExperience(USER2DATA.experienceTableData_4);
    user2.createPublication(USER2DATA.publicationTableData_1);
    user2.createPublication(USER2DATA.publicationTableData_2);
    // console.log(authority1.get({ plain: true }));
    console.log('数据表初化完毕');
  }).catch((error) => {
    console.log('数据表初始化出错：', error);
  });
}

module.exports = { User, Authority, GeneralInformation, Experience, Publication, Customization };