var jsonFormat = require('../helpers/jsonFormat');

exports.getUsers = function (req, res, next) {
  req.models.User
    .find()
    .sort({_id: -1})
    .select('name email createDateTime lastLogin')
    .exec(function(ferror, fres){
      var data = jsonFormat({
        data: fres||[]
      });
      res.jsonp( data );
    });
};
