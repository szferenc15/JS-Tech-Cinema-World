var express = require('express'),
	filmModel = require('../../model/filmModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	filmModel.find({}, function(err, films) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(films);
	});
});

module.exports = router;
