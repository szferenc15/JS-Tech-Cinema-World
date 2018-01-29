
var Datastore = require('nedb'),

  cinemaFilmDb = new Datastore({
    filename: './app/db/join_tables/cinemaFilm.db',
    autoload: true
  });

module.exports = cinemaFilmDb;
