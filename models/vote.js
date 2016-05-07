var mongoose = require('./db');
var idValidator = require('mongoose-id-validator');
var ObjectId = mongoose.Schema.ObjectId;
mongoose.set('debug', true);

var VoteSchema = new mongoose.Schema(	{
	conflict: {type: ObjectId, required: true, ref: 'Conflict'},
	side: {type: ObjectId, required: true},
	user: {type: ObjectId, required: true, ref: 'User'}
});
VoteSchema.index({conflict: 1, user: 1}, {unique: true});
VoteSchema.plugin(idValidator);

var Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;
