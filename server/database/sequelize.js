const Sequelize = require("sequelize");
const config = require("./config");

console.log('开始初始化sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// sequelize.authenticate().then(() => {
//   console.log('连接测试成功，程序即将退出');
//   process.exit();
// }).catch((err) => {
//   console.error('连接出错：', err);
// });

module.exports = sequelize;
