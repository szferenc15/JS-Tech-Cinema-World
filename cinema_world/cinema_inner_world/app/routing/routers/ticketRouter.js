var express = require('express'),
	ticketModel = require('../../model/ticketModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	ticketModel.find({}, function(err, tickets) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(tickets);
	});
});

router.route('/getTicketInformation').post(cors(), function(req, res) {
	var postData = req.body;

	var ticketInformation = [];

	for (let i = 0; i < postData.length; i++) {
		ticketModel.findOne(
			{
				type: postData[i].type
			},
			function(err, screeningTicket) {
				ticketInformation.push(screeningTicket);
				if (i == postData.length - 1) {
					res.json(ticketInformation);
				}
			}
		);
	}
});

module.exports = router;
