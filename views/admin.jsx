require('date-utils');
var React = require('react');
var DefaultLayout = require('./layouts/default');
var Navigation = require('./components/navigation');

var ListBody = React.createClass({
  render: function(){
    var list = this.props.data.map(function (key, index) {
      return (
        <tr>
          <td>{key.user?key.user.name:(key.userName||'Anonymous')}</td>
          <td>{key.log}</td>
          <td>{key.createDateTime.toFormat('YYYY-MM-DD HH24:MI:SS')}</td>
        </tr>
      );
    });
    return(
      <tbody>
        {list}
      </tbody>
    )
  }
});
var LogList = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              Console Logs
            </div>
            {/* /.panel-heading */}
            <div className="panel-body">
              <div className="dataTable_wrapper">
                <table className="table table-striped table-bordered table-hover table-condensed" id="dataTables-example">
                  <thead>
                  <tr>
                    <th>User</th>
                    <th>Behave</th>
                    <th>Created</th>
                  </tr>
                  </thead>
                  <ListBody data={this.props.adminLog} />
                </table>
              </div>
            </div>
            {/* /.panel-body */}
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html:`
              $(document).ready(function() {
                $('#dataTables-example').DataTable({
                  responsive: true,
                  pageLength: 20,
                  order: [[ 2, 'desc' ]]
                });
              })
            `}}/>
      </div>
    )
  }
});

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title="Dashboard">
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3>Welcome {this.props.session.user.name} ;)</h3></div>
            </div>
            <LogList adminLog={this.props.adminLog} />
          </div>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = index;
