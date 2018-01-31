var express = require('express'),
	roomModel = require('../../model/roomModel'),
	router = express.Router();
var cors = require('cors');

router.route('/all').get(cors(), function(req, res) {
	roomModel.find({}, function(err, rooms) {
		if (err) {
			res.send(err);
			return;
		}
		res.json(rooms);
	});
});

router.route('/roomOfScreening').post(cors(), function(req, res) {
	var postData = req.body;
	roomModel.findOne(
		{
			_id: postData._id
		},
		function(err, room) {
			if (err) {
				res.send(err);

				return;
			}
			if (room === null) {
				res.json({
					type: 'error',
					message: 'No room'
				});

				return;
			}
			res.json(room);
		}
	);
});

module.exports = router;
