exports.article = require('./article');
exports.user = require('./users');

/* GET home page. */
exports.index = function(req, res, next){
  res.render('index', { title: 'Express' });
};
