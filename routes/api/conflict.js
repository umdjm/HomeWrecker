var express = require('express');
var router = express.Router();



router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});

/* GET home page. */
router.get('/conflicts', function(req, res) {
	if(req.user)
		res.json(req.user)
	else
		res
			.status(403)
			.json(
				{"message":req.config.messages["auth.required"]}
			)

});

router.post('/conflicts', function(req, res){
	if(req.isAuthenticated()){
		
	} else {
		res
			.status(403)
			.json(
				{"message":req.config.messages["auth.required"]}
			)
	}

});

module.exports = router;
