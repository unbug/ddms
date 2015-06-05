var jsonFormat = require('../helpers/jsonFormat');

/**
 * getForm by id,or sid
 * action?id=form_id,or action?sid=form_sid
 *
 * @param req
 * @param res
 * @param next
 */
exports.getForm = function (req, res, next) {
  var id = req.query.id,
      sid = req.query.sid,
    query = id?{_id: id}:{sid: sid};
  if(!query._id && !query.sid){
    res.jsonp( jsonFormat({},0) );
  }else{
    req.models.Form
      .findOne(query)
      .sort({_id: -1})
      .select('_id sid title desc schemata')
      .exec(function(ferror, fres){
        var data = jsonFormat({
          data: fres||[]
        });
        res.jsonp( data );
      });
  }
};
