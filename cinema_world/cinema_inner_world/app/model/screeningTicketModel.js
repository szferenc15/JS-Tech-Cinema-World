
var Datastore = require('nedb'),

  screeningTicketDb = new Datastore({
    filename: './app/db/screeningTicket.db',
    autoload: true
  });

module.exports = screeningTicketDb;
