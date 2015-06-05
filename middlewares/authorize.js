// Authorization
var authorize = {};

exports.administrator = function (req, res, next) {
  if (req.session && req.session.user && /Administrator/i.test(req.session.user.role)){
    return next();
  }
  else{
    res.redirect('/login');
    //return res.sendStatus(401);
  }
};

exports.editor = function (req, res, next) {
  if (req.session && req.session.user && /Editor|Administrator/i.test(req.session.user.role)){
    return next();
  }
  else{
    res.redirect('/login');
    //return res.sendStatus(401);
  }
};
