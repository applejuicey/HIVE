const { databaseConfiguration } = require('../config/private');

const config = {
  host: 'localhost',
  database: databaseConfiguration.database,
  username: databaseConfiguration.username,
  password: databaseConfiguration.password,
  port: 3306,
};

module.exports = { config };
