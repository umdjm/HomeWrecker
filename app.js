var express = require('express');
var path = require('path');
var app = express();
var config = require('rc')('divorce');

var auth = require('./routes/auth');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);

module.exports = app;
