
var Datastore = require('nedb'),

  userDb = new Datastore({
    filename: './app/db/user.db',
    autoload: true
  });

module.exports = userDb;
