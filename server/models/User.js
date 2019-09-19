const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class User extends Model {}
User.init({
  id: {
    filed: 'id',
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    filed: 'username',
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'a username should be specified'
      },
    },
  },
  password: {
    filed: 'password',
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'a password should be specified'
      },
    },
  },
}, {
  sequelize,
  modelName: 'user',
  tableName: 'user',
  freezeTableName: true,
  timestamps: true,
});

User.sync({
  force: false,
}).then(() => {
  console.log('user表初始化完毕');
}).catch((error) => {
  console.log('user表初始化出错：', error);
});

module.exports = User;
