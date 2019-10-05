const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Experience extends Model {}
Experience.writableFieldsKeyNamesArray = ['experienceType', 'experienceName', 'experienceOrganizationName',
  'experiencePosition', 'experienceLocation', 'experienceStartYearMonth', 'experienceEndYearMonth',
  'experienceIsCurrent', 'experienceDescription', 'experienceKeywords' ];
Experience.defaultAccessibleFieldsKeyNamesArray = ['experienceUUID', 'experienceType', 'experienceName',
  'experienceOrganizationName', 'experiencePosition', 'experienceLocation', 'experienceStartYearMonth',
  'experienceEndYearMonth', 'experienceIsCurrent', 'experienceDescription', 'experienceKeywords' ];
Experience.init({
  experienceUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  experienceType: {
    type: Sequelize.ENUM,
    values: ['working', 'educational', 'social', 'internship', 'project', 'award'],
    allowNull: true,
  },
  experienceName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experienceOrganizationName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experiencePosition: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experienceLocation: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experienceStartYearMonth: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experienceEndYearMonth: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  experienceIsCurrent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  },
  experienceDescription: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  experienceKeywords: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'experience',
  tableName: 'experience',
  freezeTableName: true,
  timestamps: true,
});

module.exports = Experience;
