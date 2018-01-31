var express = require('express'),
	categoryModel = require('../../model/categoryModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	categoryModel.find({}, function(err, categories) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(categories);
	});
});

module.exports = router;
