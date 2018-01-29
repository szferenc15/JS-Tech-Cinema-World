
var Datastore = require('nedb'),

  cinemasDb = new Datastore({
    filename: './app/db/cinemas.db',
    autoload: true
  });

module.exports = cinemasDb;
