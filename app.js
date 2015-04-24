var TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY || '9CWZIgDyX23LZJce3HA4IIeW2';
var TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET || 'hVKFMdVKSKHewAGdwSNaV1VId19iEXGP7DLjPqqHJtBAHmWXKJ';


var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var everyauth = require('everyauth');
var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/cmsexpress';
var db = mongoose.connect(dbUrl, {safe: true});
var reactView = require('express-react-views').createEngine();

var models = require('./models');
var routes = require('./routes/index');


// Authorization
var authorize = function (req, res, next) {
  if (req.session && req.session.admin)
    return next();
  else
    return res.send(401);
};

everyauth.debug = true;
everyauth.twitter
  .consumerKey(TWITTER_CONSUMER_KEY)
  .consumerSecret(TWITTER_CONSUMER_SECRET)
  .findOrCreateUser(function (session, accessToken, accessTokenSecret, twitterUserMetadata) {
    var promise = this.Promise();
    process.nextTick(function () {
      var _u = {
        email: 'anonymous@none.com',
        name: twitterUserMetadata.name,
        password: accessTokenSecret,
        twitter: twitterUserMetadata
      };
      if (_u.name === 'unbug') {
        _u.admin = true;
        session.user = _u;
        session.admin = true;
      }
      var _ou = new models.User(_u);
      _ou.save(function (error, result) {
        if (error) {
          console.log(error);
          promise.fulfill(twitterUserMetadata);
        }
        console.log(result);
        promise.fulfill(twitterUserMetadata);
      });
    });
    return promise;
    // return twitterUserMetadata
  })
  .redirectPath('/admin');

// We need it because otherwise the session will be kept alive
everyauth.everymodule.handleLogout(routes.user.logout);

everyauth.everymodule.findUserById(function (user, callback) {
  callback(user)
});

var app = express();
app.locals.appTitle = "cms-express";

app.use(function (req, res, next) {
  if (!models.User) return next(new Error("No models."));
  req.models = models;
  return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

app.set('view engine', 'jsx');
app.engine('jsx', reactView);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser('/Eh@5Pfu/+"M+0[QDR3bJ$nd}<AZew]7y}4tdPtAB2=]m+JsuhOX?Gd"FzK;F.G>'));
app.use(session({secret: '/Eh@4Pfu/+"M+0[QDR3bJ$nd}<AZew]7y}4tePtAB2=]m+JsuhOX?Gd"FzKL;F.G>'}));
app.use(everyauth.middleware());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  if (req.session && req.session.admin)
    res.locals.admin = true;
  next();
});


//route page
app.get('/', routes.index);
app.get('/login', routes.user.login);
app.post('/login', routes.user.authenticate);
app.get('/logout', routes.user.logout); //if you use everyauth, this /logout route is overwriting by everyauth automatically, therefore we use custom/additional handleLogout
app.get('/admin', authorize, routes.article.admin);
app.get('/post', authorize, routes.article.post);
app.post('/post', authorize, routes.article.postArticle);
app.get('/articles/:slug', routes.article.show);

//API
var router = express.Router();
restify.serve(router, models.User);
restify.serve(router, models.Article);
app.use(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
