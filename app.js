var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var akunRouter = require('./routes/akun');
var angkatanRouter = require('./routes/angkatan');
var biayaLainRouter = require('./routes/biaya_lain');
var biayaPMBRouter = require('./routes/biaya_pmb');
var biayaTetapRouter = require('./routes/biaya_tetap');
var jurusanRouter = require('./routes/jurusan');
var kelasRouter = require('./routes/kelas');
var siswaRouter = require('./routes/siswa');
var transaksiBayarRouter = require('./routes/transaksi_bayar');
var transaksiKasRouter = require('./routes/transaksi_kas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/akun', akunRouter);
app.use('/angkatan', angkatanRouter);
app.use('/biaya_lain', biayaLainRouter);
app.use('/biaya_pmb', biayaPMBRouter);
app.use('/biaya_tetap', biayaTetapRouter);
app.use('/jurusan', jurusanRouter);
app.use('/kelas', kelasRouter);
app.use('/siswa', siswaRouter);
app.use('/transaksi_bayar', transaksiBayarRouter);
app.use('/transaksi_kas', transaksiKasRouter);

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

module.exports = app;
