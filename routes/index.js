exports.article = require('./article');
exports.user = require('./users');
exports.admin = require('./admin');
exports.form = require('./form');

/* GET home page. */
exports.index = function (req, res, next) {
  res.render('index', {title: 'Express'});
};
