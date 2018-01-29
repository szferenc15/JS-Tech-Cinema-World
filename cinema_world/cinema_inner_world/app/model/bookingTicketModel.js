
var Datastore = require('nedb'),

  bookingTicketDb = new Datastore({
    filename: './app/db/bookingTicket.db',
    autoload: true
  });

module.exports = bookingTicketDb;
