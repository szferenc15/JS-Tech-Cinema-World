
var Datastore = require('nedb'),

  bookingDb = new Datastore({
    filename: './app/db/booking.db',
    autoload: true
  });

module.exports = bookingDb;
