var express = require('express'),
	bookingTicketModel = require('../../model/bookingTicketModel'),
	userBookingModel = require('../../model/userBookingModel'),
	router = express.Router();
var cors = require('cors');

router
	.route('/all')
	.get(function(req, res) {
		bookingTicketModel.find({}, function(err, users) {
			if (err) {
				res.send(err);
				return;
			}
			res.json(users);
		});
	})
	.post(function(req, res) {
		var postData = req.body,
			validationError = {
				type: 'Validation Error',
				message: ''
			};

		if (!postData.username) {
			validationError.message = 'username is required';
		}
		if (!postData.password) {
			validationError.message = 'password is required';
		}
		if (!postData.email) {
			validationError.message = 'email is required';
		}

		if (validationError.message) {
			res.json(validationError);

			return;
		}

		bookingTicketModel.insert(postData, function(err, newUser) {
			if (err) {
				res.send(err);

				return;
			}

			res.json(newUser);
		});
	});

router
	.route('/bookingsOfScreening')
	.post(cors(), function(req, res) {
		var postData = req.body;

		bookingTicketModel.find(
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
	})

router
	.route('/new_booking')
	.post(cors(), function(req, res) {
		var postData = req.body;
		for (let i = 0; i < postData.bookings.length; i++) {
			let newBooking = {
				screeningId: postData.screeningId,
				username: postData.username,
				payment: postData.paymentMethod,
				type: postData.bookings[i].type,
				row: postData.bookings[i].row,
				chair: postData.bookings[i].chair
			}
			bookingTicketModel.insert(newBooking);
		}
	})

module.exports = router;
