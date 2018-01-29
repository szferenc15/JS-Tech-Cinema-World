
var Datastore = require('nedb'),

  filmsDb = new Datastore({
    filename: './app/db/films.db',
    autoload: true
  });

module.exports = filmsDb;
