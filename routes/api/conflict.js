var express = require('express');
var router = express.Router();

var Conflict = require('../../models/conflict');

router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});

/* GET home page. */
router.get('/conflicts', function(req, res) {
	if(req.user) {
		Conflict.find({}, function(err, docs) {
			if (!err){
				res.json({'response': docs})
			} else {
				res
					.status(403)
					.json({"message": req.config.messages["conflict.list.failed"]})
			}
		});
	} else {
		res
			.status(403)
			.json(
				{"message": req.config.messages["auth.required"]}
			)
	}
});

router.post('/conflicts', function(req, res){
	if(req.isAuthenticated()){
		var conflict = new Conflict(req.body) ;
		conflict.save(function (err) {
			if (err) {
				res
					.status(500)
					.json({message: req.config.messages["conflict.create.failed"]})
			} else {
				res
					.status(201)
					.json({message: req.config.messages["conflict.create.success"]})
			}
		});
	} else {
		res
			.status(403)
			.json(
				{"message":req.config.messages["auth.required"]}
			)
	}

});

module.exports = router;
