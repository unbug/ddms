var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  render: function () {
    var data = this.props.user || {};
    return (
      <DefaultLayout title="Create User">
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3><a href="/users/">Users</a> / Create a new user</h3></div>
            </div>
            <form role="form" method="POST" action="/users/create">
              <div className="form-group">
                {function () {
                  if (data.error) {
                    return <div className="alert alert-danger" role="alert">{data.error}</div>
                  }
                }.call(this)}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="User's Name" name="name" defaultValue={data.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="User's E-mail" name="email" defaultValue={data.email}/>
              </div>
              <div className="form-group">
                <label htmlFor="desc">Password</label>
                <input type="text" className="form-control" id="password" placeholder="User's Password" name="password" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select className="form-control" id="role" name="role" defaultValue="Register">
                  <option value="Register">Register</option>
                  <option value="Editor">Editor</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
});
