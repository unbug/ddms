var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  renderItem: function(){
    var data = this.props.form.schemata;
    var ddata = this.props.data.data;
    return data.map(function(key,index) {
      return (
        <div className="form-group">
          <label htmlFor={key.name} className="col-xs-2 control-label">{key.name}</label>
          <div className="col-xs-10">
            <input type="text" className="form-control input-sm" id={key.name} name={key.name} defaultValue={ddata[key.name]}/>
          </div>
        </div>
      )
    })
  },
  render: function () {
    var data = this.props.form;
    var ddata = this.props.data;
    return (
      <DefaultLayout title={data.title}>
        <div id="wrapper">
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3><a href={"/formdatas/"+data._id}>Form Datas</a> / Edit</h3></div>
              <div className="col-xs-2 col-xs-height col-middle"><a href={'/formdatas/delete/'+ddata._id}
                                                                    className="btn btn-default btn-circle pull-right"><i
                className="fa fa-minus"></i></a></div>
            </div>
            <form role="form" className="form-horizontal" method="POST" action={"/formdatas/update/"+ddata._id}>
              {this.renderItem()}
              <div className="form-group" style={{'marginTop': '10px'}}>
                <div className="col-xs-offset-2 col-xs-10 btn-group">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
});
