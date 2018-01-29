
var Datastore = require('nedb'),

  trailerDb = new Datastore({
    filename: './app/db/trailer.db',
    autoload: true
  });

module.exports = trailerDb;
