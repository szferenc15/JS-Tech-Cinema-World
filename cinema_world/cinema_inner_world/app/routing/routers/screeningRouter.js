var express = require('express'),
	screeningModel = require('../../model/screeningModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	screeningModel.find({}, function(err, screenings) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(screenings);
	});
});

router.route('/cinema/film').post(cors(), function(req, res) {
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
});

module.exports = router;
