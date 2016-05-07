var request = require('request');

var express = require('express');
var router = express.Router();

var User = require('../models/user');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

var config = require('rc')('divorce');

passport.serializeUser(function(user, done) {
	var query = { facebookId: user.id };
	var userData = {name: user.displayName, facebookId: user.id, photo: user.photos.length > 0 ? user.photos[0].value : ""};
	User.findOneAndUpdate(query, userData, {'new': true, 'upsert': true}, done);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new FacebookStrategy({
		clientID: config.facebook.id,
		clientSecret: config.facebook.secret,
		callbackURL: "http://www.homewrecker.com:3000/auth/facebook/callback",
		profileFields: ['id', 'displayName', 'photos', 'email']
	},
	function(accessToken, refreshToken, profile, next) {
		next(null, profile);
	}
));

router.get('/facebook',
	passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] })
);

router.get('/facebook/callback',
	passport.authenticate('facebook', { successRedirect: '/app/', failureRedirect: '/app/' })
);


module.exports = router;
