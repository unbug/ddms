;(function(){
  var reloadWarning = false;
  function closeEditorWarning(){
    return reloadWarning?'Are you sure?':null;
  }
  window.onbeforeunload = closeEditorWarning;

  function handleEditor(el){
    el = $(this);
    var textarea,parent;
    parent = el.parent().parent();
    textarea = parent.find('textarea');
    textarea.ckeditor({
      uiColor: '#ffffff',
      on: {
        change: function() {
          // Sync textarea.
          this.updateElement();
          React.addons.TestUtils.Simulate.change(textarea[0]);
        }
      }
    });
    el.remove();
    parent.find('.col-xs-9').removeClass('col-xs-9').addClass('col-xs-10');
  }

  //actions
  var Actions = {
    formList: '/forms',
    update: '/forms/update'
  }
  var Mdl = Core.Class.Model,
    getJSON = Core.RequestHandler.getJSON,
    postJSON = Core.RequestHandler.postJSON;

  //model
  function Model(){}
  Model.prototype.update = new Mdl({
    post: function (data, callback) {
      var _this = this;
      postJSON({
        action: Actions.update,
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
  var model = new Model;


  var SubItem = React.createClass({
    getInitialState: function(){
      var data = this.props.data;
      return {name: data.name,title: data.title};
    },
    notifyParent: function(){
      this.props.handleItemChange(this.props.index,this.state);
    },
    handleRemove: function(){
      this.props.handleItemRemove(this.props.index);
    },
    onNameChange: function(e){
      this.state.name = $.trim(e.target.value);
      this.notifyParent();
    },
    onTitleChange: function(e){
      this.state.title = e.target.value;
      this.notifyParent();
    },
    render: function () {
      var data = this.props.data;
      return (
        <div>
          <div className="form-group">
            <label className="col-xs-1 control-label">Name*</label>
            <div className="col-xs-2">
              <input type="text" className="form-control input-sm" onChange={this.onNameChange} value={data.name} placeholder="letter&number"/>
            </div>
            <label className="col-xs-1 control-label">Text</label>
            <div className="col-xs-6">
              <input type="text" className="form-control input-sm" onChange={this.onTitleChange} value={data.title}/>
            </div>
            <div className="col-xs-1">
              <button type="button" className="btn btn-default input-sm" onClick={this.handleRemove}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
            </div>
          </div>
        </div>
      );
    }
  });
  var SubItemList = React.createClass({
    render: function () {
      if(this.props.items.length<=0){return null;}
      var handleItemRemove = this.props.handleItemRemove;
      var handleItemChange = this.props.handleItemChange;
      return (
      <div className="form-group">
        <label className="col-xs-2 control-label">Sub fields</label>
        <div className="col-xs-10">
          {this.props.items.map(function(key,index){
            return <SubItem index={index} data={key} handleItemRemove={handleItemRemove} handleItemChange={handleItemChange}/>
          })}
        </div>
      </div>
      );
    }
  });
  var Item = React.createClass({
    getInitialState: function(){
      var data = this.props.data;
      return {name: data.name,title: data.title,required: data.required,child: data.child || []};
    },
    componentDidMount: function(){
      $(this.getDOMNode()).on('click','.init-editor',handleEditor);
    },
    componentWillUnmount: function(){
      $(this.getDOMNode()).off('click','.init-editor',handleEditor);
    },
    notifyParent: function(){
      this.props.handleItemChange(this.props.index,this.state);
    },
    handleRemove: function(){
      this.props.handleItemRemove(this.props.index);
    },
    onNameChange: function(e){
      this.state.name = $.trim(e.target.value);
      this.notifyParent();
    },
    onTitleChange: function(e){
      this.state.title = e.target.value;
      this.notifyParent();
    },
    onReqiuredChange: function(e){
      this.state.required = e.target.checked;
      this.notifyParent();
    },
    handleAddItem: function(){
      this.state.child.push({name: '',title: '',required: true,child: []});
      this.notifyParent();
    },
    handleItemRemove: function(index){
      var r = confirm("Are you sure?");
      if (r == true) {
        var child = this.state.child;
        child.splice(index, 1);
        this.notifyParent();
      }
    },
    handleItemChange: function(index,data){
      var child = this.state.child;
      child[index] = data;
      this.notifyParent();
    },
    render: function () {
      var data = this.props.data;
      return (
        <div style={{paddingTop: '10px',marginBottom: '10px'}} className="highlight">
          <div className="form-group">
            <label className="col-xs-2 control-label">Name*</label>
            <div className="input-group col-xs-8" style={{paddingLeft: '15px;'}}>
              <input type="text" className="form-control input-sm" onChange={this.onNameChange} value={data.name} placeholder="letter&number"/>
              <span className="input-group-addon">
                Required &nbsp;&nbsp;
                <input type="checkbox" onChange={this.onReqiuredChange} checked={data.required}/>
              </span>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Text</label>
            <div className="col-xs-9">
              <textarea type="text" className="form-control input-sm" ref="title" rows="1" onChange={this.onTitleChange} value={data.title} />
            </div>
            <div className="col-xs-1">
              <button type="button" className="btn btn-default input-sm init-editor"><span className="glyphicon glyphicon-resize-full" aria-hidden="true"></span></button>
            </div>
          </div>
          <SubItemList items={this.state.child} handleItemRemove={this.handleItemRemove} handleItemChange={this.handleItemChange}/>
          <div className="form-group">
            <div className="col-xs-offset-2 col-xs-10 btn-group">
              <button type="button" className="btn btn-default input-sm" onClick={this.handleRemove}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
              <button type="button" className="btn btn-default input-sm" onClick={this.handleAddItem} title="Add a new sub field"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            </div>
          </div>
        </div>
      );
    }
  });
  var ItemList = React.createClass({
    render: function () {
      var handleItemRemove = this.props.handleItemRemove;
      var handleItemChange = this.props.handleItemChange;
      return (
        <div>
          {this.props.items.map(function(key,index){
            return <Item index={index} data={key} handleItemRemove={handleItemRemove} handleItemChange={handleItemChange}/>
          })}
        </div>
      );
    }
  });

  var Form = React.createClass({
    getInitialState: function(){
      var data = window.__formData || {};
      return {_id: data._id,title: data.title,desc: data.desc,child: data.schemata||[]}
    },
    componentDidMount: function(){
      $(this.getDOMNode()).on('click','.init-editor',handleEditor);
    },
    componentWillUnmount: function(){
      $(this.getDOMNode()).off('click','.init-editor',handleEditor);
    },
    onTitleChange: function(e){
      reloadWarning = true;
      this.setState({title: e.target.value});
    },
    onDescChange: function(e){
      reloadWarning = true;
      this.setState({desc: e.target.value});
    },
    handleAddItem: function(){
      reloadWarning = true;
      var nextItem = this.state.child.concat([{required: true}]);
      this.setState({child: nextItem});
    },
    handleItemRemove: function(index){
      reloadWarning = true;
      var r = confirm("Are you sure?");
      if (r == true) {
        var child = this.state.child;
        child.splice(index, 1);
        this.setState({child: child});
      }
    },
    handleItemChange: function(index,data){
      reloadWarning = true;
      var child = this.state.child;
      child[index] = data;
      this.setState({child: child});
    },
    handleSubmit: function(e){
      e.preventDefault();
      var data = this.state;
      if($.trim(data.title)!=''){
        model.update.post(data,function(success){
          var res = model.update.get();
          if(success && res && res.code){
            reloadWarning = false;
            alert('Done!');
            window.location.reload();
          }else{
            alert('failed!');
          }
        });
      }else{
        alert('Title is required!');
      }
    },
    render: function () {
      return (
        <form role="form" className="form-horizontal">
          <div className="form-group">
            <label htmlFor="title" className="col-xs-2 control-label">Title*</label>
            <div className="col-xs-6">
              <input type="text" className="form-control input-sm" id="title" name="title" value={this.state.title} onChange={this.onTitleChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="desc" className="col-xs-2 control-label">Description</label>
            <div className="col-xs-9">
              <textarea type="text" className="form-control input-sm" ref="desc" id="desc" name="desc" rows="1" value={this.state.desc} onChange={this.onDescChange} />
            </div>
            <div className="col-xs-1">
              <button type="button" className="btn btn-default input-sm init-editor"><span className="glyphicon glyphicon-resize-full" aria-hidden="true"></span></button>
            </div>
          </div>
          <ItemList items={this.state.child} handleItemRemove={this.handleItemRemove} handleItemChange={this.handleItemChange}/>
          <div className="form-group" style={{'marginTop': '10px'}}>
            <div className="col-xs-offset-2 col-xs-10 btn-group">
              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
              <button type="button" className="btn btn-default" onClick={this.handleAddItem} title="Add a new field"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            </div>
          </div>
        </form>
      );
    }
  });
  React.render(
    <Form/>,
    document.querySelector('#form-wrapper')
  );
}());
