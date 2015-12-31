require('date-utils');
var Promise = require("bluebird");
var json2csv = require('json2csv');


exports.showList = function (req, res, next) {
  var fid = req.params.formid;
  var page = Math.max(0, req.query.page||0);
  var perPage = 50;
  var fp = Promise.resolve( req.models.Form.findOne({_id: fid}) );
  var dp = Promise.resolve( req.models.FormData.find({form: fid})
            .limit(perPage)
            .skip(perPage * page)
            .sort({_id: -1}).exec() );
  var dcp = Promise.resolve( req.models.FormData.count({form: fid}) );

  Promise.all([fp,dp,dcp])
    .then(function(docs){
      res.render('formdatas/list', {
        formdatas: {
          form: docs[0],
          data: docs[1],
          total: docs[2],
          page: page,
          perPage: perPage
        }
      });
    }).catch(function (error) {
      return next(error);
    });
};

exports.showCreateData = function (req, res, next) {
  var fid = req.params.formid;
  Promise.resolve( req.models.Form.findOne({_id: fid}) )
  .then(function(docs){
    res.render('formdatas/add',{form: docs});
  }).catch(function (error) {
    return next(error);
  });
};

exports.showUpdateData = function (req, res, next) {
  var id = req.params.id,results = {};

  Promise.resolve( req.models.FormData.findOne({_id: id}) )
    .then(function(dprs){
      results.data = dprs;
    return Promise.resolve( req.models.Form.findOne({_id: dprs.form}) );
  }).then(function(fprs){
      results.form = fprs;
      res.render('formdatas/edit',results);
  }).catch(function (error) {
    return next(error);
  });
};

exports.createData = function (req, res, next) {
  var fid = req.params.formid || '';
  if (fid){
    var data = {
      form: fid,
      data: req.body
    }
    req.models.FormData.create(data, function (cerror, cres) {
      res.redirect('/formdatas/'+fid);
    });
  }else{
    res.redirect('/forms/');
  }
};

exports.updateData = function (req, res, next) {
  var id = req.params.id;
  var data = {};
  Promise.resolve( req.models.FormData.findOne({_id: id}) )
  .then(function(dres){
    if(dres){
      data.formid = dres.form;
      data.data = req.body;
      data.updateDateTime = new Date;
      return Promise.resolve( req.models.FormData.update({_id: id},data) );
    }else{
      return Promise.reject(new Error("Not exist"));
    }
  })
  .then(function(){
    res.redirect('/formdatas/'+data.formid);
  }).catch(function (error) {
    return next(error);
  });
};

exports.deleteData = function (req, res, next) {
  var id = req.params.id,data;
  Promise.resolve( req.models.FormData.findOne({_id: id}) )
  .then(function(dres){
      if(dres){
        data = dres;
        return Promise.resolve( req.models.FormData.remove({_id: id}) );
      }else{
        return Promise.reject(new Error("Not exist"));
      }
  })
  .then(function(){
    res.redirect('/formdatas/'+data.form);
  }).catch(function (error) {
    return next(error);
  });
};

exports.getCSV = function (req, res, next) {
  var fid = req.params.formid;
  var fp = Promise.resolve( req.models.Form.findOne({_id: fid}) );
  var dp = Promise.resolve( req.models.FormData.listByFormId(fid) );

  Promise.all([fp,dp])
    .then(function(docs){
      var schemata = docs[0].schemata,
          fdata = docs[1],
          fields,data;

      schemata = schemata.filter(function(key){
        return key.required;
      });
      fields = schemata.map(function(key){
        return key.name;
      });

      data = fdata.map(function(key){
        var d = {};
        fields.forEach(function (fk) {
          d[fk] = key.data[fk]||'';
        });
        d.Created = key.createDateTime.toFormat('YY-MM-DD HH24:MI:SS');
        d.Updated = key.updateDateTime.toFormat('YY-MM-DD HH24:MI:SS');
        return d;
      });
      fields = fields.concat(['Created','Updated']);

      json2csv({ data: data, fields: fields }, function(cvserr, cvsres) {
        if (cvserr) { return next(cvserr); }
        res.set({
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename=' +docs[0].title+ '.csv'
        });
        res.send(cvsres);
      });
    }).catch(function (error) {
      return next(error);
    });
};
