var TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY || 'f5tv1En1M4Twu6fiaeU7wWhaa';
var TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET || 'vBihNYaOkYHIJ1RZSAN36KX2DKjIlvhnbktS8wDfjA0egulZLK';
var everyauth = require('everyauth');

function twitterLogin(models,routes) {
  everyauth.debug = true;
  everyauth.twitter
    .consumerKey(TWITTER_CONSUMER_KEY)
    .consumerSecret(TWITTER_CONSUMER_SECRET)
    .findOrCreateUser(function (session, accessToken, accessTokenSecret, twitterUserMetadata) {
      var promise = this.Promise();
      var _u = {
        email: twitterUserMetadata.name + '@example.com',
        name: twitterUserMetadata.name,
        password: accessTokenSecret,
        twitter: twitterUserMetadata
      };
      process.nextTick(function () {
        models.User.findOne({name: twitterUserMetadata.name}, function (err, result) {
          if (err) {
            promise.fulfill([err]);
          } else if (!result) {
            var _ou = new models.User(_u);
            _ou.save(function (error, result) {
              if (error) {
                promise.fulfill([error]);
              } else if (result) {
                session.user = result;
                delete session.user.password;
                promise.fulfill(twitterUserMetadata);
              }
            });
          } else if (result._id) {
            session.user = result;
            delete session.user.password;
            promise.fulfill(twitterUserMetadata);
          }
        });
      });
      return promise;
    })
    .redirectPath('/admin');

  // We need it because otherwise the session will be kept alive
  everyauth.everymodule.handleLogout(routes.user.logout);
  everyauth.everymodule.findUserById(function (user, callback) {
    callback(user)
  });
}

module.exports = twitterLogin;
