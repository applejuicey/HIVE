const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Customization extends Model {}
Customization.writableFieldsKeyNamesArray = ['customizationJSONData', 'customizationKeywords'];
Customization.defaultAccessibleFieldsKeyNamesArray = ['customizationUUID', 'customizationJSONData', 'customizationKeywords'];
Customization.init({
  customizationUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  customizationJSONData: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  customizationKeywords: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'customization',
  tableName: 'customization',
  freezeTableName: true,
  timestamps: true,
});

module.exports = Customization;
