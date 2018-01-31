
var Datastore = require('nedb'),

  filmDb = new Datastore({
    filename: './app/db/film.db',
    autoload: true
  });

  filmDb.ensureIndex({ fieldName: 'title', unique: true });
  
module.exports = filmDb;
