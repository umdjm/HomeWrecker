var express = require('express');
var logout = require('express-passport-logout');
var router = express.Router();

router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});

router.get('/user', function(req, res) {
	if(req.user)
		res.json(req.user);
	else
		res
			.status(401)
			.json(
				{"message":req.config.messages["auth.required"]}
			)
});

router.get('/user/friends', function(req, res) {
	res.json({'response': [
		{'userName': 'Dj Martin'},
		{'userName': 'Mike Jeff'},
		{'userName': 'Shovel Mahmujihad'}
	]})
});

router.get('/logout', function(req, res) {
	if(req.user) {
		req.logout();
		res.redirect('/app');
	}else {
		res
			.status(401)
			.json(
				{"message": req.config.messages["auth.required"]}
			)
	}
});

module.exports = router;
