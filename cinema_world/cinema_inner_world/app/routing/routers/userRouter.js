var express = require('express'),
	usersModel = require('../../model/userModel'),
	router = express.Router();
var cors = require('cors');

router.route('/login').post(cors(), function(req, res) {
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
								message: 'Helytelen felhasznalonev vagy jelszo'
							});
						} else {
							if (user.password === postData.password) {
								res.json(user);
								return;
							}
							res.json({
								type: 'error',
								message: 'Helytelen email cim vagy jelszo'
							});
						}
					}
				);
			} else {
				if (user.password === postData.password) {
					res.json(user);
					return;
				}
				res.json({
					type: 'error',
					message: 'Helytelen email cim vagy jelszo'
				});
			}
		}
	);
});

router.route('/register').put(cors(), function(req, res) {
	var postData = req.body;

	usersModel.findOne(
		{
			username: postData.username
		},
		function(err, user) {
			if (user === null) {
				usersModel.findOne(
					{
						email: postData.email
					},
					function(err, user) {
						if (user === null) {
							let newUser = {
								username: postData.username,
								password: postData.password,
								email: postData.email,
								phoneNumber: postData.phoneNumber
							};
							usersModel.insert(newUser);
							res.json({
								type: 'success',
								message: 'ok'
							});
						} else {
							res.json({
								type: 'error',
								message: 'A felhasznalonevnek es az emailnek is egyedinek kell lennie'
							});
						}
					}
				);
			} else {
				res.json({
					type: 'error',
					message: 'A felhasznalonevnek es az emailnek is egyedinek kell lennie'
				});
			}
		}
	);
});

module.exports = router;
