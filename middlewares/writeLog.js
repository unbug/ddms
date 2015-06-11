// write log

function getLog(req){
  var log = [];
  log.push('['+req.method+'] ');
  log.push(req.url);

  return log.join('');
}
var writeLog = function (req, res, next) {
  var session = req.session || {},
    user = session && session.user || {};

  new req.models.AdminLog({
    user: user.id,
    userName: user.name,
    log: getLog(req)
  }).save();

  return next();
};

module.exports = writeLog;
