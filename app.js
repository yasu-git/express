//必要なモジュールの読み込み
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//ルート用モジュールの読み込み
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var notesRouter = require('./routes/notes');
var catRouter = require('./routes/cat');
var qrcodeRouter = require('./routes/qrcode');
var dogRouter = require('./routes/dog');
var yesnoRouter = require('./routes/yesno');
var notes_from_bRouter = require('./routes/notes_from_b');


//expressオブジェクトの生成
var app = express();

//基本設定
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//関数の組み込み
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ルート、エラー処理の設定
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/notes',notesRouter);
app.use('/cat',catRouter);
app.use('/dog',dogRouter);
app.use('/qrcode',qrcodeRouter);
app.use('/yesno',yesnoRouter);
app.use('/notes_from_b',notes_from_bRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//model.exportsでappオブジェクトをモジュールとして公開
module.exports = app;
