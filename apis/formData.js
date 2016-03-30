var Promise = require("bluebird");
var jsonFormat = require('../helpers/jsonFormat');

/**
 * getData by id
 * action?id=id
 *
 * @param req
 * @param res
 * @param next
 */
exports.getDataById = function (req, res, next) {
  var id = req.query.id,
    query = {_id: id};
  if(!query._id){
    res.jsonp( jsonFormat({},0) );
  }else{
    req.models.FormData
      .findOne(query)
      .sort({_id: -1})
      .exec(function(ferror, fres){
        var data = jsonFormat({
          data: fres||[]
        });
        res.jsonp( data );
      });
  }
};
/**
 *
 * update data
 *
 * @param req
 * @param res
 * @param next
 */
exports.updateData = function (req, res, next) {
  var id = req.body.id,
    success_url = req.body.success_url,
    failure_url = req.body.failure_url,
    data = req.body,
    p;

  delete data.id;
  delete data.callback;
  delete data.success_url;
  delete data.failure_url;

  if(id && data){
    var _data = {
      data: data || {}
    };
    p = Promise.resolve( req.models.FormData.update({_id: id},_data) );
  }

  if(p){
    p.then(function(){
      if(success_url){
        res.redirect(success_url);
      }else{
        res.jsonp(jsonFormat({},1));
      }
    }).catch(function (error) {
      if(failure_url){
        res.redirect(failure_url);
      }else{
        res.jsonp( jsonFormat({},0) );
      }
    });
  }else{
    if(failure_url){
      res.redirect(failure_url);
    }else{
      res.jsonp( jsonFormat({},0,'id are required') );
    }
  }
};

/**
 * getForm by formid or formsid
 * action?formid=form_id,or action?formsid=form_sid
 *
 * @param req
 * @param res
 * @param next
 */
exports.getDataByFormId = function (req, res, next) {
  var id = req.query.formid,
      sid = req.query.formsid,
      perPage = 50,
      page = Math.max(0, req.query.page||0),
      p;

  function fn(fid){
    return Promise.all([Promise.resolve( req.models.FormData.find({form: fid})
      .limit(perPage)
      .skip(perPage * page)
      .sort({_id: -1}).exec() ),
      Promise.resolve( req.models.FormData.count({form: fid}) )
    ]);
  }

  if(id){
    p = fn(id);
  }else if(sid){
    p = Promise.resolve( req.models.Form.findOne({sid: sid}) )
      .then(function(fprs){
        if(fprs){
          return Promise.resolve( fn(fprs._id) );
        }else{
          return Promise.reject(new Error("Not exist"));
        }
      });
  }

  if(p){
    p.then(function(result){
      var data = jsonFormat({
        data: result[0]||[],
        total: result[1],
        page: page,
        perPage: perPage
      });
      res.jsonp( data );
    }).catch(function (error) {
      res.jsonp( jsonFormat({},0) );
    });
  }else{
    res.jsonp( jsonFormat({},0) );
  }
};

/**
 * postData by formid or formsid
 *
 * @param req
 * @param res
 * @param next
 */
exports.postDataByFormId = function (req, res, next) {
  var id = req.body.formid,
      sid = req.body.formsid,
      success_url = req.body.success_url,
      failure_url = req.body.failure_url,
      data = req.body,
      p;

  delete data.formid;
  delete data.formsid;
  delete data.callback;
  delete data.success_url;
  delete data.failure_url;


  function fn(fid){
    var _data = {
      form: fid,
      data: data || {}
    }
    return Promise.resolve( req.models.FormData.create(_data) );
  }

  if(id && data){
    p = fn(id);
  }else if(sid && data){
    p = Promise.resolve( req.models.Form.findOne({sid: sid}) )
      .then(function(fprs){
        if(fprs){
          return Promise.resolve( fn(fprs._id) );
        }else{
          return Promise.reject(new Error("Not exist"));
        }
      });
  }

  if(p){
    p.then(function(){
      if(success_url){
        res.redirect(success_url);
      }else{
        res.jsonp(jsonFormat({},1));
      }
    }).catch(function (error) {
      if(failure_url){
        res.redirect(failure_url);
      }else{
        res.jsonp( jsonFormat({},0) );
      }
    });
  }else{
    if(failure_url){
      res.redirect(failure_url);
    }else{
      res.jsonp( jsonFormat({},0,'formid are required') );
    }
  }
};
