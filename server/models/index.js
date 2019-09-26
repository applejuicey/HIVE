const User = require('./User');
const Article = require('./Article');

// relations
// 一个Article有一个author（User）
Article.belongsTo(User, {as: 'author'});

module.exports = { User, Article };