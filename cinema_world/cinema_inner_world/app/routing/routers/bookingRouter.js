var express = require('express'),
	bookingModel = require('../../model/bookingModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	bookingModel.find({}, function(err, bookings) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(bookings);
	});
});

router.route('/bookingsOfScreening').post(cors(), function(req, res) {
	var postData = req.body;

	bookingModel.find(
		{
			screeningId: postData._id
		},
		function(err, bookingTickets) {
			if (err) {
				res.send(err);

				return;
			}

			if (bookingTickets === null) {
				res.json({
					type: 'error',
					message: 'No bookings'
				});

				return;
			}

			res.json(bookingTickets);
		}
	);
});

router.route('/new_booking').post(cors(), function(req, res) {
	var postData = req.body;
	for (let i = 0; i < postData.bookings.length; i++) {
		let newBooking = {
			screeningId: postData.screeningId,
			username: postData.username,
			payment: postData.paymentMethod,
			type: postData.bookings[i].type,
			row: postData.bookings[i].row,
			chair: postData.bookings[i].chair
		};
		bookingModel.insert(newBooking);
	}
	res.json({message: "ok"});
});

module.exports = router;
