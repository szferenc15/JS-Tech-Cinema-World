
var Datastore = require('nedb'),

  userDb = new Datastore({
    filename: './app/db/user.db',
    autoload: true
  });

  userDb.ensureIndex({ fieldName: 'username', unique: true });
  userDb.ensureIndex({ fieldName: 'email', unique: true });

module.exports = userDb;
