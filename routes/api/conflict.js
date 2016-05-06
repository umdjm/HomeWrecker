var express = require('express');
var router = express.Router();

var isAuthenticated = require('../../security/isAuthenticated');

var Conflict = require('../../models/conflict');

router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});

/* GET home page. */
router.get('/conflicts', function(req, res) {
	Conflict.find({}, function(err, docs) {
		if (!err){
			res.json({'response': docs})
		} else {
			res
				.status(403)
				.json({"message": req.config.messages["conflict.list.failed"]})
		}
	});
});

router.post('/conflicts', isAuthenticated(), function(req, res){
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
	}
});

router.get('/conflicts/:conflictId', function(req, res) {
	Conflict.findById(req.param('conflictId'), function(err, doc) {
		if (!err){
			res.json(doc)
		} else {
			res
				.status(403)
				.json({"message": req.config.messages["conflict.find.failed"]})
		}
	});
});

router.post('/conflicts/:conflictId', isAuthenticated(), function(req, res) {
	var obj = req.body;

	if(req.user) {
		Conflict.findByIdAndUpdate(req.param('conflictId'), { $set: obj}, function (err, conflict) {
			if (!err){
				res.json(conflict);
			} else {
				res
					.status(500)
					.json({"message": req.config.messages["Could not update conflict."] })
			}
		});
	}
});

module.exports = router;
