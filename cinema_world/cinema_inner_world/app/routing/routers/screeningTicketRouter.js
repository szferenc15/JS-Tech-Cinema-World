var express = require('express'),
	screeningTicketModel = require('../../model/screeningTicketModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	screeningTicketModel.find({}, function(err, screeningTickets) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(screeningTickets);
	});
});

router.route('/getTickets').post(cors(), function(req, res) {
	var postData = req.body;

	screeningTicketModel.find(
		{
			screeningId: postData._id
		},
		function(err, screeningTickets) {
			if (err) {
				res.send(err);

				return;
			}

			if (screeningTickets === null) {
				res.json({
					type: 'error',
					message: 'No tickets'
				});

				return;
			}

			res.json(screeningTickets);
		}
	);
});

module.exports = router;
