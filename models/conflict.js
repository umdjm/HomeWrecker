var mongoose = require('./db');

var Conflict = mongoose.model('Conflict', { name: String });

module.exports = Conflict;
