
var Datastore = require('nedb'),

  usersDb = new Datastore({
    filename: './app/db/users.db',
    autoload: true
  });

module.exports = usersDb;
