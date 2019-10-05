const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class User extends Model {}
User.writableFieldsKeyNamesArray = ['userAccountName', 'userPassword', 'userEmail'];
User.defaultAccessibleFieldsKeyNamesArray = ['userUUID', 'userAccountName', 'userPassword', 'userEmail'];
User.init({
  userUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  userAccountName: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'a unique username should be specified'
      },
    },
  },
  userPassword: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'a password should be specified'
      },
    },
  },
  userEmail: {
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'an unique email address should be specified'
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

module.exports = User;
