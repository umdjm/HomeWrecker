var mongoose = require('./db');

var ObjectId = mongoose.Schema.ObjectId;

var Side = new mongoose.Schema({
	account: ObjectId,
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
		side1: Side,
		side2: Side,
		voters: [ObjectId]
	}
);

module.exports = Conflict;
