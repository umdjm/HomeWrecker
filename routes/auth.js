var express = require('express');
var router = express.Router();

var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

var config = require('rc')('divorce');

passport.use(new FacebookStrategy({
		clientID: config.facebook.id,
		clientSecret: config.facebook.secret,
		callbackURL: "http://localhost:3000/auth/facebook/callback"
	},
	function(accessToken, refreshToken, profile, next) {
		next(null, profile);
	}
));

router.get('/facebook',
	passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

router.get('/facebook/callback', function(req, res){
	res.send(req.params);
});


module.exports = router;
