const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Publication extends Model {}
Publication.writableFieldsKeyNamesArray = ['publicationName', 'publicationAuthorNames', 'publicationJournalName',
  'publicationLink', 'publicationYear', 'publicationDescription', 'publicationKeywords'];
Publication.defaultAccessibleFieldsKeyNamesArray = ['publicationUUID', 'publicationName', 'publicationAuthorNames',
  'publicationJournalName', 'publicationLink', 'publicationYear', 'publicationDescription', 'publicationKeywords'];
Publication.init({
  publicationUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  publicationName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  publicationAuthorNames: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  publicationJournalName: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  publicationLink: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  publicationYear: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  publicationDescription: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  publicationKeywords: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'publication',
  tableName: 'publication',
  freezeTableName: true,
  timestamps: true,
});

module.exports = Publication;
