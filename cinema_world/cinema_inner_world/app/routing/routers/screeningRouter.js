var express = require('express'),
	screeningModel = require('../../model/screeningModel'),
	router = express.Router();
var cors = require('cors');

router
	.route('/all')
	.get(function(req, res) {
		screeningModel.find({}, function(err, users) {
			if (err) {
				res.send(err);
				return;
			}
			res.json(users);
		});
	})


router
	.route('/cinema/film')
	.post(cors(), function(req, res) {
		var postData = req.body;

		screeningModel.find(
			{
				cinemaId: postData.id,
				filmTitle: postData.filmTitle
			},
			function(err, screenings) {
				if (err) {
					res.send(err);

					return;
				}

				if (screenings === null) {
					res.json({
						type: 'error',
						message: 'No screenings'
					});

					return;
				}

				res.json(screenings);
			}
		);
	})
	.get(function(req, res) {
		screeningModel.findOne(
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
		screeningModel.remove(
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
