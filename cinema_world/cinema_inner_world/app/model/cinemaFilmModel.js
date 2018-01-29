
var Datastore = require('nedb'),

  cinemaFilmDb = new Datastore({
    filename: './app/db/cinemaFilm.db',
    autoload: true
  });

module.exports = cinemaFilmDb;
