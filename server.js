var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var routes = require('./routes/index');
var aasfRoute = require('./routes/aasf.route');
var aircraftRoute = require('./routes/aircraft.route');
var aircraftavailable = require('./routes/aircraftavailable.route');
var crews = require('./routes/crews.route');
var aftps = require('./routes/aftps.route');


var nuke = require('./routes/nuke.route');


// var crewRoute = require('./routes/crew.route');
// var fhpRoute = require('./routes/fhp.route');

var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/aasf', aasfRoute);
app.use('/aircraft', aircraftRoute);
app.use('/aircraftavailable', aircraftavailable);
app.use('/crews', crews);
app.use('/aftps', aftps);



app.use('/nuke', nuke);




// app.use('/crews', crewsRoute);
// app.use('/fhp', fhpRoute);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

// error handlers
 
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
res.status(err.status || 500);
res.render('error', {
message: err.message,
error: err
});
});
}
 
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
res.status(err.status || 500);
res.render('error', {
message: err.message,
error: {}
});
});
module.exports = app;