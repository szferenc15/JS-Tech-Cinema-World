var express = require('express'),
	bookingModel = require('../../model/bookingModel'),
	router = express.Router();
var cors = require('cors');

router
	.route('/all')
	.get(function(req, res) {
		bookingModel.find({}, function(err, users) {
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

		bookingModel.insert(postData, function(err, newUser) {
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
	})
	.get(function(req, res) {
		bookingModel.findOne(
			{
				_id: req.params.id
			},
			function(err, user) {
				if (err) {
					res.send(err);

					return;
				}

				if (user === null) {
					res.json({
						type: 'error',
						message: 'Did not find a user with "id" of "' + req.params.id + '".'
					});

					return;
				}

				res.json(user);
			}
		);
	})
	.delete(function(req, res) {
		bookingModel.remove(
			{
				_id: req.params.id
			},
			function(err, user) {
				if (err) {
					res.send(err);
				}

				res.json({
					type: 'success',
					message: 'Successfully deleted user with id "' + req.params.id + '".'
				});
			}
		);
	});

module.exports = router;
