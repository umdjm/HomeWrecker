var express = require('express');
var path = require('path');
var app = express();
var passport = require('passport');
var config = require('rc')('divorce');
var session = require('express-session');

var auth = require('./routes/auth');
var user = require('./routes/api/user');
var conflicts = require('./routes/api/conflict');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: config.secret, name: 'homewrecker' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/api', user);
app.use('/api', conflicts);

app.set('config', config);

module.exports = app;
