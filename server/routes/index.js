const authentication = require('./authentication');
const home = require('./home');
const user = require('./user');
const authority = require('./authority');

module.exports = function (app) {
  // routes
  app.use('/api/authentication', authentication);
  app.use('/api/', home);
  app.use('/api/user', user);
  app.use('/api/user/authority', authority);
};