var Promise = require("bluebird");

exports.showList = function (req, res, next) {
  req.models.Form.list(function (error, docs) {
    if (error) return next(error);
    res.render('forms/list', {forms: docs});
  });
};
exports.showListByProjectId = function (req, res, next) {
  var pid = req.params.projectid;
  var pp = Promise.resolve( req.models.Project.findOne({_id: pid}) );
  var fp = Promise.resolve( req.models.Form.listByProjectId(pid) );

  Promise.all([pp,fp])
    .then(function(docs){
      res.render('forms/list', {project: docs[0],forms: docs[1]});
    }).catch(function (error) {
      return next(error);
    });
};

exports.showCreateForm = function (req, res, next) {
  var pid = req.params.projectid;
  var pp = Promise.resolve( req.models.Project.findOne({_id: pid}) );

  pp.then(function(docs){
    res.render('forms/add', {project: docs});
  }).catch(function (error) {
    return next(error);
  });
};

exports.showUpdateForm = function (req, res, next) {
  var id = req.params.id;
  req.models.Form.findOne({
    _id: id
  }, function (ferror, fres) {
    res.render('forms/edit',{form: fres});
  });
};

exports.createForm = function (req, res, next) {
  var pid = req.params.projectid;
  var result = {code: 1,msg: 'ok'};
  var body = req.body;
  if (!body.title){
    result.code = 0;
    result.msg = 'Title is required!';
    res.send(result)
  }
  var form = {
    project: pid,
    user: req.session.user.id,
    title: body.title,
    desc: body.desc,
    schemata: formatFormSchemata(body.child)
  }
  req.models.Form.create(form, function (cerror, cres) {
    if (cerror){
      result.code = 0;
      result.msg = 'Failed!';
    }else{
      result.data = cres;
    }
    res.send(result);
  });
};

exports.updateForm = function (req, res, next) {
  var result = {code: 1,msg: 'ok'};
  var body = req.body;
  if (!body.title){
    result.code = 0;
    result.msg = 'Title is required!';
    res.send(result)
  }
  var form = {
    title: body.title,
    desc: body.desc,
    schemata: formatFormSchemata(body.child),
    updateDateTime: new Date
  }
  req.models.Form.update({_id: body._id}, form,function (cerror, cres) {
    if (cerror){
      result.code = 0;
      result.msg = 'Failed!';
    }
    res.send(result);
  });
};

exports.deleteForm = function (req, res, next) {
  var id = req.params.id;
  var fpd = Promise.resolve( req.models.Form.findOne({_id: id}) );
  var fp = Promise.resolve( req.models.Form.remove({_id: id}) );
  var dp = Promise.resolve( req.models.FormData.remove({form: id}) );
  Promise.all([fpd,fp,dp])
    .then(function(docs){
      res.redirect('/forms/'+docs[0].project);
    }).catch(function (error) {
      return next(error);
    });
};

exports.copyForm = function (req, res, next) {
  var id = req.params.id;
  req.models.Form.findOne({
    _id: id
  }, function (ferror, fres) {
    if(fres){
      var form = {
        project: fres.project,
        user: req.session.user.id,
        title: '[COPY]-'+fres.title,
        desc: fres.desc,
        schemata: fres.schemata
      }
      req.models.Form.create(form, function (cerror, cres) {
        res.redirect('/forms/'+fres.project);
      });
    }else{
      res.redirect('/forms');
    }
  });
};

function formatFormSchemata(child){
  child = Array.isArray(child)?child:[];
  var filtered = [];
  filtered = child.filter(function(key){
    key.child = formatFormSchemata(key.child);
    return key.name!='';
  });
  return filtered;
}
