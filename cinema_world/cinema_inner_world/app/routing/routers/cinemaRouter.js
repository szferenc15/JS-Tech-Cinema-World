var express = require('express'),
	cinemaModel = require('../../model/cinemaModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	cinemaModel.find({}, function(err, cinemas) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(cinemas);
	});
});

module.exports = router;
