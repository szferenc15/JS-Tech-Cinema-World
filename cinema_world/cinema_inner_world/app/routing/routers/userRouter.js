var express = require('express'),
	usersModel = require('../../model/userModel'),
	router = express.Router();
var cors = require('cors')

router
	.route('/login')
	.post(cors(), function(req, res) {
		var postData = req.body;

		usersModel.findOne(
			{
				username: postData.identifier
			},
			function(err, user) {
				if (user === null) {
					usersModel.findOne(
						{
							email: postData.identifier
						},
						function(err, user) {
							
							if (user === null) {
								res.json({
									type: 'error',
									message: 'Wrong username or password'
								});
								return;
							} else {
								if (user.password === postData.password) {
									res.json(user);
									return;
								}
								res.json({
									type: 'error',
									message: 'Wrong email or password'
								});
								return;
							}
						}
					);
				} else {
					if (user.password === postData.password) {
						console.log("hereeee");
						console.log(user);
						res.json(user);
						return;
					}
					res.json({
						type: 'error',
						message: 'Wrong email or password'
					});
					return;
				}
			}
		);
	}
);

router
	.route('/users/:id')
	.put(function(req, res) {
		usersModel.findOne(
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

				usersModel.update(
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
		usersModel.findOne(
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
		usersModel.remove(
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
