var _ = require('underscore');

exports.showList = function (req, res, next) {
  req.models.Project.list(function (error, docs) {
    if (error) return next(error);
    res.render('projects/list', {projects: docs});
  });
};

exports.showCreateProject = function (req, res, next) {
  res.render('projects/add',{session: req.session});
};

exports.showUpdateProject = function (req, res, next) {
  var id = req.params.id;
  req.models.Project.findOne({
    _id: id
  }, function (ferror, fres) {
    res.render('projects/edit',{session: req.session,project: fres});
  });
};

exports.createProject = function (req, res, next) {
  var body = req.body,
    u = {
      user: req.session.user.id,
      name: body.name,
      desc: body.desc
    };

  if (!u.name){
    u.error = 'Please enter project\'s name.'
  }
  if(u.error){
    return res.render('projects/add',{session: req.session,project: u});
  }
  new req.models.Project(u).save(function(serror,sres){
    if(serror){
      u.error = serror.toString();
      return res.render('projects/create',{session: req.session,project: u});
    }else if(sres){
      res.redirect('/projects');
    }
  });
};
exports.updateProject = function (req, res, next) {
  var body = req.body,
    u = {
      _id: body.id,
      name: body.name,
      desc: body.desc
    };

  if (!u.name){
    u.error = 'Please enter project name'
  }
  if(u.error){
    return res.render('projects/add',{session: req.session,project: u});
  }
  req.models.Project.update({_id: u._id},{
    name: body.name,
    desc: body.desc
  },function (uerror, ures) {
    if (uerror) {
      return res.render('projects/update/'+u._id, {session: req.session, project: u});
    } else if (ures) {
      res.redirect('/projects');
    }
  });
};

exports.deleteProject = function (req, res, next) {
  var id = req.params.id;
  req.models.Project.findOne({
      _id: id
    },function(ferror, fres){
    if(fres){
      req.models.Project.remove({_id: id},function(){
        res.redirect('/projects');
      });
    }else{
      res.redirect('/projects');
    }
  });
};
