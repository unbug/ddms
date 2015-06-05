
exports.index = function (req, res, next) {
  req.models.AdminLog.list(function (error, data) {
    if (error) return next(error);
    res.render('admin', {adminLog: data,session: req.session});
  });
};
