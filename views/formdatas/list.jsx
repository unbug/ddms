require('date-utils');
var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

var ListHead = React.createClass({
  render: function(){
    var form = this.props.data.schemata || [];
    var list = [];
    list.push(<th>Order</th>);
    form = form.filter(function(key){
      return key.required;
    });
    form.map(function (key, index) {
      list.push ( <th>{key.name}</th> );
    });
    return(
      <thead><tr>{list}<th>Created</th><th>Updated</th><th></th></tr></thead>
    )
  }
});
var ListFooter = React.createClass({
  render: function(){
    var data = this.props.data || {};
    var pre = [];
    var next = [];
    var btnStyle = {
      float: 'right'
    };
    if((data.page-1)>=0){
      pre.push( <button type="button" className="btn btn-outline btn-default"><a href={'/formdatas/'+data.form._id+'?page='+(data.page-1)}><i className="fa fa-chevron-left"></i> &nbsp;Previous</a></button> );
    }
    if((data.page+1)<Math.ceil(data.total/data.perPage)){
      next.push( <button type="button" className="btn btn-outline btn-default"><a href={'/formdatas/'+data.form._id+'?page='+(data.page+1)}>Next &nbsp;<i className="fa fa-chevron-right"></i></a></button> );
    }
    return(
    <div className="row row-same-height">
      <div  style={btnStyle}>{pre}&nbsp;&nbsp;{next}</div>
    </div>
    )
  }
});

var ListBody = React.createClass({
  render: function(){
    var form = this.props.data.form.schemata || [];
    var data = this.props.data.data || {};

    form = form.filter(function(key){
      return key.required;
    });

    var list = data.map(function (dkey, dindex) {
      var flist = form.map(function (fkey, findex) {
        return (
          <td>{dkey.data && dkey.data[fkey.name]}</td>
        )
      });
      return (
        <tr>
          <td>{data.length-dindex}</td>
          {flist}
          <td>{dkey.createDateTime && dkey.createDateTime.toFormat('YY-MM-DD HH24:MI:SS')}</td>
          <td>{dkey.updateDateTime && dkey.updateDateTime.toFormat('YY-MM-DD HH24:MI:SS')}</td>
          <td className="edit-td">
            <a href={'/formdatas/update/'+dkey._id.toString()}><i className="fa fa-edit fa-fw" title="edit"/>Edit</a>
          </td>
        </tr>
      );
    });
    return(
      <tbody>{list}</tbody>
    )
  }
});

module.exports = React.createClass({
  render: function () {
    var data = this.props.formdatas;
    return (
      <DefaultLayout title="Form Datas">
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-10 col-xs-height"><h3><a href={"/forms/update/"+data.form._id}>Form</a> / Form Datas</h3></div>
              <div className="col-xs-2 col-xs-height col-middle">
                <div className="pull-right">
                  <a href={"/formdatas/csv/"+data.form._id} className="btn btn-default btn-circle"><i className="fa fa-download"></i></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;<a href={"/formdatas/create/"+data.form._id} className="btn btn-default btn-circle"><i className="fa fa-plus"></i></a>
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Data List (Total Entries: {data.total}, Total pages: {Math.ceil(data.total/data.perPage)}, Current page: {data.page}, Entries per page: {data.perPage})
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="dataTable_wrapper">
                      <table className="table table-striped table-bordered table-hover table-condensed table-responsive limit-table" id="dataTables-example">
                        <ListHead data={data.form} />
                        <ListBody data={data} />
                      </table>
                      <ListFooter data={data} />
                    </div>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /#page-wrapper */}
        </div>
        <script dangerouslySetInnerHTML={{__html:`
            $(document).ready(function() {
              $('#dataTables-example').DataTable({
                responsive: true,
                paging: false,
                searching: false,
                order: [[ 0, 'desc' ]]
              });
            })
          `}}/>
      </DefaultLayout>
    );
  }
});
