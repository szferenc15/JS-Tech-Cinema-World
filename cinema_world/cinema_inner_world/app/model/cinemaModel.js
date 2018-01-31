
var Datastore = require('nedb'),

  cinemaDb = new Datastore({
    filename: './app/db/cinema.db',
    autoload: true
  });

  cinemaDb.ensureIndex({ fieldName: 'name', unique: true });

module.exports = cinemaDb;
