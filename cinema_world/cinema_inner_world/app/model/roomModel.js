
var Datastore = require('nedb'),

  roomDb = new Datastore({
    filename: './app/db/room.db',
    autoload: true
  });

module.exports = roomDb;
