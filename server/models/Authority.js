const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Authority extends Model {}
Authority.writableFieldsKeyNamesArray = ['authorityCanCreateArticle', 'authorityCanCreateCV'];
Authority.defaultAccessibleFieldsKeyNamesArray = ['authorityUUID', 'authorityIsAdmin', 'authorityCanCreateArticle',
  'authorityCanCreateCV'];
Authority.init({
  authorityUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  authorityIsAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  },
  authorityCanCreateArticle: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  authorityCanCreateCV: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'authority',
  tableName: 'authority',
  freezeTableName: true,
  timestamps: true,
});

module.exports = Authority;