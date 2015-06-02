var _ = require('underscore'),
  bcrypt = require('bcrypt');
/**
 * reset admin user
 * @param User
 */
exports.genAdmin = function (User) {
  var bcrypt = require('bcrypt');
  User.find({name: 'admin'},function(ferr,fres){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash('adminpass', salt, function (err, hash) {
        var u = {
          email: 'admin@admin.com',
          name: 'admin',
          password: hash,
          role: 'Administrator'
        };
        if(!fres){
          new User(u).save();
        }else{
          User.update({_id: fres._id},u);
        }
      });
    });
  });
}
exports.login = function (req, res, next) {
  res.render('login', {session: req.session});
};

exports.logout = function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
};

exports.authenticate = function (req, res, next) {
  var resResult = {
    error: 'Please enter your email and password.'
  };
  if (!req.body.email || !req.body.password){
    return res.render('login', resResult);
  }

  req.models.User.findOne({
    email: req.body.email
  }, function (error, user) {
    resResult = _.extend(resResult,{
      error: 'Incorrect email&password combination.',
      email: req.body.email,
      password: req.body.password
    });
    if (error) return next(error);
    if (!user) return res.render('login', resResult);
    bcrypt.compare(req.body.password, user.password, function (bcryptErr, bcryptRes) {
      if (bcryptRes) {
        req.session.user = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        };
        req.models.User.update({_id: user._id},{lastLogin: Date.now()},function(uperror,upres){
          res.redirect('/admin');
        });
      } else {
        res.render('login', resResult);
      }
    });
  })
};

exports.showList = function (req, res, next) {
  req.models.User.list(function (error, docs) {
    if (error) return next(error);
    res.render('users/list', {users: docs});
  });
};

exports.showCreateUser = function (req, res, next) {
  res.render('users/add',{session: req.session});
};
exports.showUpdateUser = function (req, res, next) {
  var id = req.params.id;
  req.models.User.findOne({
    _id: id
  }, function (ferror, fres) {
    res.render('users/edit',{session: req.session,user: fres});
  });
};

exports.createUser = function (req, res, next) {
  var body = req.body,
    u = {
      email: body.email,
      name: body.name,
      password: body.password,
      role: body.role
    };

  if (!u.name || !u.email || !u.password){
    u.error = 'Please enter your name,email and password.'
  }
  if(u.error){
    return res.render('users/add',{session: req.session,user: u});
  }
  req.models.User.findOne({
    email: req.body.email
  }, function (ferror, fres) {
    if(!fres){
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(body.password, salt, function (err, hash) {
          u.password = hash;
          new req.models.User(u).save(function(serror,sres){
            if(serror){
              u.password = body.password;
              u.error = serror.toString();
              return res.render('users/create',{session: req.session,user: u});
            }else if(sres){
              res.redirect('/users');
            }
          });
        });
      });
    }else{
      u.error = 'Email is invalid or already taken!';
      return res.render('users/create',{session: req.session,user: u});
    }
  });
};
exports.updateUser = function (req, res, next) {
  var body = req.body,
    u = {
      _id: body.id,
      email: body.email,
      name: body.name,
      role: body.role,
      password: body.password
    };

  if (!u.name || !u.email){
    u.error = 'Please enter your name,email and password.'
  }
  if(u.error){
    return res.render('users/add',{session: req.session,user: u});
  }
  req.models.User.findOne({
    _id: {$ne: u._id},
    email: req.body.email
  }, function (ferror, fres) {
    if (!fres) {
      function afterFn (uerror, ures) {
        if (uerror) {
          u.password = body.password;
          u.error = uerror.toString();
          return res.render('users/update/'+u._id, {session: req.session, user: u});
        } else if (ures) {
          res.redirect('/users');
        }
      }
      if(body.password){
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(body.password, salt, function (err, hash) {
            u.password = hash;
            req.models.User.update({_id: u._id},{
              email: body.email,
              name: body.name,
              role: body.role,
              password: hash
            },afterFn);
          });
        });
      }else{
        req.models.User.update({_id: u._id},{
          email: body.email,
          name: body.name,
          role: body.role
        },afterFn);
      }
    } else {
      u.error = 'Email is invalid or already taken!';
      return res.render('users/update/'+u._id, {session: req.session, user: u});
    }
  });
};

exports.deleteUser = function (req, res, next) {
  var id = req.params.id;
  req.models.User.findOne({
      _id: id
    },function(ferror, fres){
    if(fres && fres.role == 'Register'){
      req.models.User.remove({_id: id},function(){
        res.redirect('/users');
      });
    }else{
      req.models.User.update({_id: id},{
        role: 'Register'
      },function () {
        res.redirect('/users');
      });
    }
  });
};
