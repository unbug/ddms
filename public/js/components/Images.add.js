;(function(){
  var uploadConfig = window.__upload_config || {upload: '',server: ''};
  var thisHost = Core.localHost;
  var uploadHost = '';
  var a = document.createElement('a');
  a.href = uploadConfig.upload;
  uploadHost = a.protocol + "//" + a.hostname + (a.port ? ':' + a.port : '');

  //actions
  var Actions = {
    list: '/images/',
    create: '/images/create/',

    thisHost: thisHost,
    uploadHost: uploadHost,
    serverHost: uploadConfig.server,
    uploadImage: uploadConfig.upload+'?redirect_url='+thisHost+'/img_upload_done.html'
  }
  var Mdl = Core.Class.Model,
    getJSON = Core.RequestHandler.getJSON,
    postJSON = Core.RequestHandler.postJSON;

  //model
  function Model(){
    var MODEL = this;
  }
  Model.prototype.create = new Mdl({
    post: function (data, callback) {
      var _this = this;
      postJSON({
        action: Actions.create,
        data: data,
        complete: function (data) {
          if (data.success) {
            _this.set(data.data);
          }
          callback && callback(data.success);
        }
      });
    }
  });
  function View(){
    var VIEW = this;
    var els = {
      uploadForm: $('#upload_form'),
      addForm: $('#add_form')
    };

    els.uploadForm.attr('action',Actions.uploadImage);

    els.addForm.on('click','button',function(){
      Core.Event.trigger('onAddImage',els.addForm.find('#link').val());
    });

    this.resetAddForm = function(){
      els.addForm.find('#link').val('');
      alert('Done!');
    }
    window.img_upload_done = function(link){
      Core.Event.trigger('onImageUpload',link);
    };
  }
  function Controller(){
    var CTRL = this;
    this.model = new Model;
    this.view = new View;

    Core.Event.on('onImageUpload',onImageUpload);
    Core.Event.on('onAddImage',onAddImage);

    function onImageUpload(link){
      link = Core.localParam(link)['search']['image'];
      link = link.replace(Actions.uploadHost,Actions.serverHost);

      beforePostCreate(link,function(success){
        var res = CTRL.model.create.get();
        if(success && res && res.code){
          window.location = Actions.list;
        }else{
          alert('failed!');
        }
      });
    }
    function onAddImage(link){
      beforePostCreate(link,CTRL.view.resetAddForm);
    }
    function beforePostCreate(link,callback){
      if(link){
        var data = {
          url: link
        };
        CTRL.model.create.post(data,callback);
      }
    }

  }
  new Controller();
}());
