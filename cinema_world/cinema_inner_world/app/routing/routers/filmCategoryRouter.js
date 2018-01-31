var express = require('express'),
	filmCategoryModel = require('../../model/filmCategoryModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	filmCategoryModel.find({}, function(err, filmCategories) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(filmCategories);
	});
});

module.exports = router;
