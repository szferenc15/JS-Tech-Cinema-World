var express = require('express'),
	filmCategoryModel = require('../model/filmCategoryModel'),
	router = express.Router();

router
	.route('/all')
	.get(function(req, res) {
		filmCategoryModel.find({}, function(err, users) {
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

		filmCategoryModel.insert(postData, function(err, newUser) {
			if (err) {
				res.send(err);

				return;
			}

			res.json(newUser);
		});
	});

router
	.route('/users/:id')
	.put(function(req, res) {
		filmCategoryModel.findOne(
			{
				_id: req.params.id
			},
			function(err, user) {
				var prop;

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

				for (prop in req.body) {
					if (prop !== '_id') {
						user[prop] = req.body[prop];
					}
				}

				filmCategoryModel.update(
					{
						_id: user._id
					},
					user,
					{},
					function(err, numReplaced) {
						if (err) {
							res.send(err);

							return;
						}

						res.json({
							type: 'success',
							message: 'Replaced ' + numReplaced + ' user(s).'
						});
					}
				);
			}
		);
	})
	.get(function(req, res) {
		filmCategoryModel.findOne(
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
		filmCategoryModel.remove(
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
