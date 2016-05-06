var express = require('express');
var logout = require('express-passport-logout');
var router = express.Router();
var User = require('../../models/user');

router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});

router.get('/user', function(req, res, next) {
	if(req.user)
		res.json(req.user);
	else
		res
			.status(401)
			.json(
				{"message":req.config.messages["auth.required"]}
			)
});

router.get('/users', function(req, res) {
	User.find({}, function(err, docs) {
		if (!err){
			res.json({'response': docs})
		} else {
			res
				.status(403)
				.json({"message": req.config.messages["user.list.failed"]})
		}
	});
});

router.get('/logout', function(req, res, next) {
	if(req.user) {
		req.logout();
		res.redirect('/');
	}else {
		res
			.status(401)
			.json(
				{"message": req.config.messages["auth.required"]}
			)
	}
});

module.exports = router;
