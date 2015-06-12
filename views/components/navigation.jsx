var React = require('react');

var navigation = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation"
           style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand" href="/admin">Data Drive Management System <span className="label label-default">Beta</span></a>
        </div>
        {/* /.navbar-header */}
        <ul className="nav navbar-top-links navbar-right">
          {/* /.dropdown */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-user fa-fw"/> <i className="fa fa-caret-down"/>
            </a>
            <ul className="dropdown-menu dropdown-user">
              {/*
              <li><a href="#"><i className="fa fa-user fa-fw"/> User Profile</a>
              </li>
              <li><a href="#"><i className="fa fa-gear fa-fw"/> Settings</a>
              </li>
              <li className="divider"/>
              */}
              <li><a href="/logout"><i className="fa fa-sign-out fa-fw"/> Logout</a></li>
            </ul>
            {/* /.dropdown-user */}
          </li>
          {/* /.dropdown */}
        </ul>
        {/* /.navbar-top-links */}
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
              <li>
                <a href="/admin"><i className="fa fa-dashboard fa-fw"/> Dashboard</a>
              </li>
              <li>
                <a href="/users"><i className="fa fa-users fa-fw"/> Users</a>
              </li>
              <li>
                <a href="/projects"><i className="fa fa-tasks fa-fw"/> Projects</a>
              </li>
              <li>
                <a href="/images"><i className="fa fa-photo fa-fw"/> Images</a>
              </li>
              <li>
                <a href="/apidocs.html" target="_blank"><i className="fa fa-info-circle fa-fw"/> API Docs</a>
              </li>
            </ul>
          </div>
          {/* /.sidebar-collapse */}
        </div>
        {/* /.navbar-static-side */}
      </nav>
    );
  }
});

module.exports = navigation;
