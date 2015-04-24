var React = require('react');
var DefaultLayout = require('./layouts/default');

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
          {/* Navigation */}
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
              <a className="navbar-brand" href="#">{this.props.title}</a>
            </div>
            {/* /.navbar-header */}
            <ul className="nav navbar-top-links navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-envelope fa-fw"/> <i className="fa fa-caret-down"/>
                </a>
                <ul className="dropdown-menu dropdown-messages">
                  <li>
                    <a href="#">
                      <div>
                        <strong>John Smith</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                      </div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        eleifend...
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <strong>John Smith</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                      </div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        eleifend...
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <strong>John Smith</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                      </div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        eleifend...
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a className="text-center" href="#">
                      <strong>Read All Messages</strong>
                      <i className="fa fa-angle-right"/>
                    </a>
                  </li>
                </ul>
                {/* /.dropdown-messages */}
              </li>
              {/* /.dropdown */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-tasks fa-fw"/> <i className="fa fa-caret-down"/>
                </a>
                <ul className="dropdown-menu dropdown-tasks">
                  <li>
                    <a href="#">
                      <div>
                        <p>
                          <strong>Task 1</strong>
                          <span className="pull-right text-muted">40% Complete</span>
                        </p>

                        <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-success"
                               role="progressbar" aria-valuenow={40} aria-valuemin={0}
                               aria-valuemax={100} style={{width: '40%'}}>
                            <span className="sr-only">40% Complete (success)</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <p>
                          <strong>Task 2</strong>
                          <span className="pull-right text-muted">20% Complete</span>
                        </p>

                        <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-info" role="progressbar"
                               aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}
                               style={{width: '20%'}}>
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <p>
                          <strong>Task 3</strong>
                          <span className="pull-right text-muted">60% Complete</span>
                        </p>

                        <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-warning"
                               role="progressbar" aria-valuenow={60} aria-valuemin={0}
                               aria-valuemax={100} style={{width: '60%'}}>
                            <span className="sr-only">60% Complete (warning)</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <p>
                          <strong>Task 4</strong>
                          <span className="pull-right text-muted">80% Complete</span>
                        </p>

                        <div className="progress progress-striped active">
                          <div className="progress-bar progress-bar-danger" role="progressbar"
                               aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}
                               style={{width: '80%'}}>
                            <span className="sr-only">80% Complete (danger)</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a className="text-center" href="#">
                      <strong>See All Tasks</strong>
                      <i className="fa fa-angle-right"/>
                    </a>
                  </li>
                </ul>
                {/* /.dropdown-tasks */}
              </li>
              {/* /.dropdown */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-bell fa-fw"/> <i className="fa fa-caret-down"/>
                </a>
                <ul className="dropdown-menu dropdown-alerts">
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-comment fa-fw"/> New Comment
                        <span className="pull-right text-muted small">4 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-twitter fa-fw"/> 3 New Followers
                        <span className="pull-right text-muted small">12 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-envelope fa-fw"/> Message Sent
                        <span className="pull-right text-muted small">4 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-tasks fa-fw"/> New Task
                        <span className="pull-right text-muted small">4 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a href="#">
                      <div>
                        <i className="fa fa-upload fa-fw"/> Server Rebooted
                        <span className="pull-right text-muted small">4 minutes ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="divider"/>
                  <li>
                    <a className="text-center" href="#">
                      <strong>See All Alerts</strong>
                      <i className="fa fa-angle-right"/>
                    </a>
                  </li>
                </ul>
                {/* /.dropdown-alerts */}
              </li>
              {/* /.dropdown */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-user fa-fw"/> <i className="fa fa-caret-down"/>
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li><a href="#"><i className="fa fa-user fa-fw"/> User Profile</a>
                  </li>
                  <li><a href="#"><i className="fa fa-gear fa-fw"/> Settings</a>
                  </li>
                  <li className="divider"/>
                  <li><a href="login.html"><i className="fa fa-sign-out fa-fw"/> Logout</a>
                  </li>
                </ul>
                {/* /.dropdown-user */}
              </li>
              {/* /.dropdown */}
            </ul>
            {/* /.navbar-top-links */}
            <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                  <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                      <input type="text" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"/>
                      </button>
                    </span>
                    </div>
                    {/* /input-group */}
                  </li>
                  <li>
                    <a href="index.html"><i className="fa fa-dashboard fa-fw"/> Dashboard</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-bar-chart-o fa-fw"/> Charts<span
                      className="fa arrow"/></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="flot.html">Flot Charts</a>
                      </li>
                      <li>
                        <a href="morris.html">Morris.js Charts</a>
                      </li>
                    </ul>
                    {/* /.nav-second-level */}
                  </li>
                  <li>
                    <a href="tables.html"><i className="fa fa-table fa-fw"/> Tables</a>
                  </li>
                  <li>
                    <a href="forms.html"><i className="fa fa-edit fa-fw"/> Forms</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-wrench fa-fw"/> UI Elements<span
                      className="fa arrow"/></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="panels-wells.html">Panels and Wells</a>
                      </li>
                      <li>
                        <a href="buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="notifications.html">Notifications</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="icons.html"> Icons</a>
                      </li>
                      <li>
                        <a href="grid.html">Grid</a>
                      </li>
                    </ul>
                    {/* /.nav-second-level */}
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-sitemap fa-fw"/> Multi-Level Dropdown<span
                      className="fa arrow"/></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="#">Second Level Item</a>
                      </li>
                      <li>
                        <a href="#">Second Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level <span className="fa arrow"/></a>
                        <ul className="nav nav-third-level">
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                        </ul>
                        {/* /.nav-third-level */}
                      </li>
                    </ul>
                    {/* /.nav-second-level */}
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-files-o fa-fw"/> Sample Pages<span
                      className="fa arrow"/></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="blank.html">Blank Page</a>
                      </li>
                      <li>
                        <a href="login.html">Login Page</a>
                      </li>
                    </ul>
                    {/* /.nav-second-level */}
                  </li>
                </ul>
              </div>
              {/* /.sidebar-collapse */}
            </div>
            {/* /.navbar-static-side */}
          </nav>
        </div>
        {/* /#wrapper */}
      </DefaultLayout>
    );
  }
});

module.exports = index;
