var express = require('express');
var router = express.Router();
var Conflict = require('../models/conflict');


router.get('/:conflictId/edit', function(req, res, next) {
	Conflict.findById(req.param('conflictId'), function(err, conflict){
		res.render('edit-conflict', { title: 'Edit conflict', conflict: conflict });
	});
});

module.exports = router;
