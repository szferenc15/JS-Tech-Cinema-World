
var Datastore = require('nedb'),

  userBookingDb = new Datastore({
    filename: './app/db/join_tables/userBooking.db',
    autoload: true
  });

module.exports = userBookingDb;
