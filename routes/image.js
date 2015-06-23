var Promise = require("bluebird");
var Actions = require('../helpers/Actions');

exports.showList = function (req, res, next) {
  var tags = req.query.tags;
  if(tags){
    tags = (tags+'').trim().split(',');
    tags = tags.filter(function(key){
      return (key+'').trim();
    });
    tags = tags.join('|');
    req.models.Image.listByTags(tags,function (error, docs) {
      if (error) return next(error);
      res.render('images/list', {images: docs});
    });
  }else{
    req.models.Image.list(function (error, docs) {
      if (error) return next(error);
      res.render('images/list', {images: docs});
    });
  }
};

exports.showCreateImage = function (req, res, next) {
  //upload: the server api to upload image
  //server: the server api to access image
  res.render('images/add', {uploadConfig: {upload: Actions.imageUpload,server: Actions.imageServer}});
};

exports.createImage = function (req, res, next) {
  var result = {code: 1,msg: 'ok'};
  var body = req.body;
  if (!body.url){
    result.code = 0;
    result.msg = 'Url is required!';
    res.send(result);
    return;
  }
  var image = {
    url: body.url,
    tags: body.tags
  }
  req.models.Image.create(image, function (cerror, cres) {
    if (cerror){
      result.code = 0;
      result.msg = 'Failed!';
    }
    res.send(result);
  });
};

exports.deleteImage = function (req, res, next) {
  var id = req.params.id;
  Promise.resolve( req.models.Image.remove({_id: id}) )
    .then(function(){
      res.redirect('/images/');
    }).catch(function (error) {
      return next(error);
    });
};
