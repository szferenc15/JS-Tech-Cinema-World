
var Datastore = require('nedb'),

  ticketDb = new Datastore({
    filename: './app/db/ticket.db',
    autoload: true
  });

module.exports = ticketDb;
