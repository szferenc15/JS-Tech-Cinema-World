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
		function(err, bookings) {
			if (err) {
				res.send(err);

				return;
			}

			if (bookings === null) {
				res.json({
					type: 'error',
					message: 'No bookings'
				});

				return;
			}

			res.json(bookings);
		}
	);
});

router.route('/new_booking').put(cors(), function(req, res) {
	var putData = req.body;
	for (let i = 0; i < putData.bookings.length; i++) {
		let newBooking = {
			screeningId: putData.screeningId,
			username: putData.username,
			payment: putData.paymentMethod,
			type: putData.bookings[i].type,
			row: putData.bookings[i].row,
			chair: putData.bookings[i].chair
		};
		bookingModel.insert(newBooking);
	}
	res.json({message: "ok"});
});

module.exports = router;
