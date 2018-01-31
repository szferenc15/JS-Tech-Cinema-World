
var Datastore = require('nedb'),

  ticketDb = new Datastore({
    filename: './app/db/ticket.db',
    autoload: true
  });

  ticketDb.ensureIndex({ fieldName: 'type', unique: true });

module.exports = ticketDb;
