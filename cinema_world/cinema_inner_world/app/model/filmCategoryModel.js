
var Datastore = require('nedb'),

  filmCategoryDb = new Datastore({
    filename: './app/db/filmCategory.db',
    autoload: true
  });

module.exports = filmCategoryDb;
