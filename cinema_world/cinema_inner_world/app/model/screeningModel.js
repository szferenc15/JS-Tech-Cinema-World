
var Datastore = require('nedb'),

  screeningDb = new Datastore({
    filename: './app/db/screening.db',
    autoload: true
  });

module.exports = screeningDb;
