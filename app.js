var express = require('express');
var path = require('path');
var app = express();
var passport = require('passport');
var config = require('rc')('divorce');
var publicConfig = require('rc')('publicconfig');
for (var attr in publicConfig) { config[attr] = publicConfig[attr]; }
var session = require('express-session');

var index = require('./routes/index');
var auth = require('./routes/auth');
var user = require('./routes/api/user');
var s3 = require('./routes/api/s3');
var conflicts = require('./routes/api/conflict');
var conflict = require('./routes/conflict');
var votes = require('./routes/api/vote');

var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: config.secret, name: 'homewrecker' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/app', index);

app.use('/conflict', conflict);

app.use('/auth', auth);

app.use('/api', user);
app.use('/api', conflicts);
app.use('/api', votes);
app.use('/api', s3);

app.set('config', config);

module.exports = app;
