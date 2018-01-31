var express = require('express'),
	screeningTicketModel = require('../../model/screeningTicketModel'),
	router = express.Router();
var cors = require('cors');

router
	.route('/all')
	.get(cors(), function(req, res) {
		screeningTicketModel.find({}, function(err, users) {
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

		screeningTicketModel.insert(postData, function(err, newUser) {
			if (err) {
				res.send(err);

				return;
			}

			res.json(newUser);
		});
	});

router
	.route('/getTickets')
	.post(cors(), function(req, res) {
		var postData = req.body;

		screeningTicketModel.find(
			{
				screeningId: postData._id,
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
	})

module.exports = router;
