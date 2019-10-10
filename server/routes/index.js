const authentication = require('./authentication');
const home = require('./home');
const user = require('./user');
const authority = require('./authority');
const generalInformation = require('./generalInformation');
const experience = require('./experience');
const publication = require('./publication');
const customization = require('./customization');
const cv = require('./cv');

module.exports = function (app) {
  // routes
  app.use('/api/authentication', authentication);
  app.use('/api/', home);
  app.use('/api/user', user);
  app.use('/api/user/authority', authority);
  app.use('/api/user/generalInformation', generalInformation);
  app.use('/api/user/experience', experience);
  app.use('/api/user/publication', publication);
  app.use('/api/user/customization', customization);
  app.use('/api/cv', cv);
};