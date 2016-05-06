var config = require('rc')('divorce');
var mongoose = require('mongoose');

module.exports = mongoose.connect(config.mongo.connectionString);
