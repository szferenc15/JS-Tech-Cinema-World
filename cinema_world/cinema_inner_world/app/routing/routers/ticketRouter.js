var express = require('express'),
	ticketModel = require('../../model/ticketModel'),
	router = express.Router();
var cors = require('cors');

router
	.route('/all')
	.get(function(req, res) {
		ticketModel.find({}, function(err, users) {
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

		ticketModel.insert(postData, function(err, newUser) {
			if (err) {
				res.send(err);

				return;
			}

			res.json(newUser);
		});
	});

router
	.route('/getTicketInformation')
	.post(cors(), function(req, res) {
		var postData = req.body;

		var ticketInformation = [];
		
		for (let i = 0; i < postData.length; i++) {
			ticketModel.findOne(
				{
					type: postData[i].type,
				},
				function(err, screeningTicket) {
					ticketInformation.push(screeningTicket);
					if (i == postData.length - 1) {
						res.json(ticketInformation);
					}
				}
			);
		}
	})

module.exports = router;
