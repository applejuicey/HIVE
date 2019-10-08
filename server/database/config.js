const { databaseConfiguration } = require('../config/private');

const config = {
  host: databaseConfiguration.host,
  database: databaseConfiguration.database,
  username: databaseConfiguration.username,
  password: databaseConfiguration.password,
  port: databaseConfiguration.port,
};

module.exports = { config };
