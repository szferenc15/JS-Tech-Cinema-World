
var Datastore = require('nedb'),

  categoryDb = new Datastore({
    filename: './app/db/category.db',
    autoload: true
  });

module.exports = categoryDb;
