const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/sequelize');

class Article extends Model {}
Article.init({
  id: {
    filed: 'id',
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  articleTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  authorName: {
    type: Sequelize.STRING,
    allowNull: false,
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