var React = require('react');
var DefaultLayout = require('./layouts/default');

var Signin = React.createClass({
  render: function () {
    var data = this.props.children || {};
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Please Sign In</h3>
              </div>
              <div className="panel-body">
                <form role="form" method="POST" action="/login">
                  <fieldset>
                    <div className="form-group">
                      {function () {
                        if (data.error) {
                          return <div className="alert alert-danger" role="alert">{data.error}</div>
                        }
                      }.call(this)}
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus
                             defaultValue={data.email}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" name="password" type="password"
                             defaultValue={data.password}/>
                    </div>
                    <button className="btn btn-lg btn-success btn-block" type="submit">Login</button>
                    <a href="/auth/twitter" className="btn btn-block btn-social btn-twitter">
                      <i className="fa fa-twitter"></i> Sign in with Twitter
                    </a>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
var Logout = React.createClass({
  render: function () {
    var data = this.props.children;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Welcome {data.name},{/Register/i.test(data.role)?'your account is in review.':'have a nice day!'}</h3>
              </div>
              <div className="panel-body">
                <a className="btn btn-lg btn-success btn-block" href="/admin">Admin</a>
                <a type="submit" className="btn btn-lg btn-danger btn-block" href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var Login = React.createClass({
  render: function () {
    return this.props.session && this.props.session.user ? this.renderLogout() : this.renderSignin();
  },
  renderSignin: function () {
    return (
      <DefaultLayout title="Login">
        <Signin>{this.props}</Signin>
      </DefaultLayout>
    );
  },
  renderLogout: function () {
    return (
      <DefaultLayout title="Login">
        <Logout>{this.props.session.user}</Logout>
      </DefaultLayout>
    );
  }
});

module.exports = Login;
