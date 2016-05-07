var express = require('express');
var router = express.Router();

var isAuthenticated = require('../../security/isAuthenticated');
var Vote = require('../../models/vote');

router.use(function(req, res, next){
	req.config = req.app.get('config');
	next();
});



router.get('/votes/:conflictId', function(req, res) {
	var conditions = {conflict: req.param('conflict')};
	Vote.find(conditions, function(err, docs) {
		if (!err){
			res.json(docs)
		} else {
			res
				.status(403)
				.json({"message": req.config.messages["votes.find.failed"]})
		}
	});
});

router.post('/vote', isAuthenticated(), function(req, res){
	if(req.isAuthenticated()) {
		var vote = {conflict: req.param('conflict'), side: req.param('side'),  user: req.user._id};
		var conditions = {conflict: req.param('conflict'), user: req.user._id};
		var options = {'new': true, 'upsert': true, "runValidators": true};

		Vote.findOneAndUpdate(conditions, vote, options, function (err, result) {
			if (err) {
				res
					.status(500)
					.json({message: req.config.messages["vote.create.failed"]})
			} else {
				res
					.status(201)
					.json({message: req.config.messages["vote.create.success"]})
			}
		});
	}
});

module.exports = router;
