
var Datastore = require('nedb'),

  userBookingDb = new Datastore({
    filename: './app/db/userBooking.db',
    autoload: true
  });

module.exports = userBookingDb;
