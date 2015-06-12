exports.user = require('./user');
exports.project = require('./project');
exports.admin = require('./admin');
exports.form = require('./form');
exports.formData = require('./formData');
exports.image = require('./image');

/* GET home page. */
exports.index = function (req, res, next) {
  res.render('index', {title: 'DDMS'});
};
