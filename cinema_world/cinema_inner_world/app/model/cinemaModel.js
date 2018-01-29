
var Datastore = require('nedb'),

  cinemaDb = new Datastore({
    filename: './app/db/cinema.db',
    autoload: true
  });

module.exports = cinemaDb;
