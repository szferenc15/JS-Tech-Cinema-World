
var Datastore = require('nedb'),

  categoryDb = new Datastore({
    filename: './app/db/category.db',
    autoload: true
  });

  categoryDb.ensureIndex({ fieldName: 'category', unique: true });

module.exports = categoryDb;
