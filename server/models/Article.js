const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Article extends Model {}
Article.writableFieldsKeyNamesArray = ['username', 'password'];
Article.init({
  id: {
    filed: 'id',
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'article',
  tableName: 'article',
  freezeTableName: true,
  timestamps: true,
});

Article.sync({
  force: false,
}).then(() => {
  console.log('article表初始化完毕');
}).catch((error) => {
  console.log('article表初始化出错：', error);
});

module.exports = Article;