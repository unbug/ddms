require('date-utils');
var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

var ListBody = React.createClass({
  render: function(){
    var list = this.props.data.map(function (key, index) {
      return (
        <tr title={key._id.toString()}>
          <td>{key.name}</td>
          <td>{key.role}</td>
          <td>{key.email}</td>
          <td>{key.createDateTime && key.createDateTime.toFormat('YYYY-MM-DD HH24:MI:SS')}</td>
          <td>{key.lastLogin && key.lastLogin.toFormat('YYYY-MM-DD HH24:MI:SS')}</td>
          <td><a href={'/users/update/'+key._id.toString()}><i className="fa fa-edit fa-fw"/></a></td>
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
    var data = this.props.users;
    return (
      <DefaultLayout title="Users">
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>

          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-10 col-xs-height"><h3>Users</h3></div>
              <div className="col-xs-2 col-xs-height col-middle"><a href="/users/create"
                                                                    className="btn btn-default btn-circle pull-right"><i
                className="fa fa-plus"></i></a></div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    User List
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="dataTable_wrapper">
                      <table className="table table-striped table-bordered table-hover table-condensed" id="dataTables-example">
                        <thead>
                        <tr>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Email</th>
                          <th>Created</th>
                          <th>Last Login</th>
                          <th></th>
                        </tr>
                        </thead>
                        <ListBody data={data}/>
                      </table>
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
                responsive: true
              });
            })
          `}}/>
      </DefaultLayout>
    );
  }
});
