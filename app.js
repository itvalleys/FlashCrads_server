var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


require('./config/config');
require('./models/db');
require('./config/passportConfig');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//spcket
const server = require('http').createServer(app);


// start server
server.listen(process.env.PORT || '3000', () =>
  console.log(`Server started at port : 3000`)
);


module.exports = app;
