var mongoose = require('./db');

var User = mongoose.model('User', { name: String, facebookId: String, photo: String});

module.exports = User;
