var React = require('react');
var DefaultLayout = require('./layouts/default');

var Signin = React.createClass({
    render: function () {
        return(
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
                                            <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" name="password" type="password" defaultValue />
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input name="remember" type="checkbox" defaultValue="Remember Me" />Remember Me
                                            </label>
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
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Welcome {this.props.name} ;)</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" method="GET" action="/admin">
                                    <fieldset>
                                        <button className="btn btn-lg btn-success btn-block" type="submit">Admin</button>
                                    </fieldset>
                                </form>
                                <br/>
                                <form role="form" method="GET" action="/logout">
                                    <fieldset>
                                        <button type="submit" className="btn btn-lg btn-danger btn-block">Logout</button>
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

var Login = React.createClass({
    render: function () {
        return this.props.session.user ? this.renderLogout() : this.renderSignin();
    },
    renderSignin: function(){
        return (
            <DefaultLayout title={this.props.title}>
                <Signin>{this.props.session.user}</Signin>
            </DefaultLayout>
        );
    },
    renderLogout: function(){
        return (
            <DefaultLayout title={this.props.title}>
                <Logout>{this.props.session.user}</Logout>
            </DefaultLayout>
        );
    }
});

module.exports = Login;
