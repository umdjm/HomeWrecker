var mongoose = require('./db');
var ObjectId = mongoose.Schema.ObjectId;

var Side = new mongoose.Schema({
	user: ObjectId,
	votes: Number,
	videos: {
		opening: String,
		rebuttal: String,
		closing: String
	}
});

var Conflict = mongoose.model(
	'Conflict',
	{
		name: String,
		description: String,
		sides: [Side]
	}
);

module.exports = Conflict;
