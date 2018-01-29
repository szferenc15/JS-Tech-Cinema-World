
var Datastore = require('nedb'),

  filmDb = new Datastore({
    filename: './app/db/film.db',
    autoload: true
  });

module.exports = filmDb;
