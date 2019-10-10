const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class GeneralInformation extends Model {}
GeneralInformation.writableFieldsKeyNamesArray = ['generalInformationChineseName', 'generalInformationEnglishName',
  'generalInformationBirthday', 'generalInformationCurrentLocation', 'generalInformationCurrentPosition',
  'generalInformationDescription', 'generalInformationGender', 'generalInformationPhotoPath',
  'generalInformationEmailAddress', 'generalInformationPhoneNumber', 'generalInformationPersonalWebsiteURL',
  'generalInformationGithubURL'];
GeneralInformation.defaultAccessibleFieldsKeyNamesArray = ['generalInformationUUID', 'generalInformationChineseName',
  'generalInformationEnglishName', 'generalInformationBirthday', 'generalInformationCurrentLocation',
  'generalInformationCurrentPosition', 'generalInformationDescription', 'generalInformationGender',
  'generalInformationPhotoPath', 'generalInformationEmailAddress', 'generalInformationPhoneNumber',
  'generalInformationPersonalWebsiteURL', 'generalInformationGithubURL'];
GeneralInformation.init({
  generalInformationUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  generalInformationChineseName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationEnglishName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationBirthday: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationCurrentLocation: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationCurrentPosition: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationDescription: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  generalInformationGender: {
    type: Sequelize.ENUM,
    values: ['M', 'F'],
    allowNull: true,
  },
  generalInformationPhotoPath: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  generalInformationEmailAddress: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationPhoneNumber: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationPersonalWebsiteURL: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  generalInformationGithubURL: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'generalInformation',
  tableName: 'generalInformation',
  freezeTableName: true,
  timestamps: true,
});

module.exports = GeneralInformation;
