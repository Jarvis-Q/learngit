var index = require('../routes/index');
var joinus = require('../routes/joinus');
var about = require('../routes/about');
var users = require('../routes/users');

module.exports = function(app) {
  app.use(index);
  app.use(joinus);
  app.use(about);
  app.use(users);
};