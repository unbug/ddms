var React = require('react');
var DefaultLayout = require('./layouts/default');

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="wrapper">
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
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-comments fa-5x"/>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">26</div>
                        <div>New Comments!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i
                                              className="fa fa-arrow-circle-right"/></span>

                      <div className="clearfix"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-tasks fa-5x"/>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">12</div>
                        <div>New Tasks!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i
                                              className="fa fa-arrow-circle-right"/></span>

                      <div className="clearfix"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-shopping-cart fa-5x"/>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">124</div>
                        <div>New Orders!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i
                                              className="fa fa-arrow-circle-right"/></span>

                      <div className="clearfix"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-support fa-5x"/>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">13</div>
                        <div>Support Tickets!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i
                                              className="fa fa-arrow-circle-right"/></span>

                      <div className="clearfix"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"/> Area Chart Example
                    <div className="pull-right">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-xs dropdown-toggle"
                                data-toggle="dropdown">
                          Actions
                          <span className="caret"/>
                        </button>
                        <ul className="dropdown-menu pull-right" role="menu">
                          <li><a href="#">Action</a>
                          </li>
                          <li><a href="#">Another action</a>
                          </li>
                          <li><a href="#">Something else here</a>
                          </li>
                          <li className="divider"/>
                          <li><a href="#">Separated link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div id="morris-area-chart"/>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"/> Bar Chart Example
                    <div className="pull-right">
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-xs dropdown-toggle"
                                data-toggle="dropdown">
                          Actions
                          <span className="caret"/>
                        </button>
                        <ul className="dropdown-menu pull-right" role="menu">
                          <li><a href="#">Action</a>
                          </li>
                          <li><a href="#">Another action</a>
                          </li>
                          <li><a href="#">Something else here</a>
                          </li>
                          <li className="divider"/>
                          <li><a href="#">Separated link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="table-responsive">
                          <table className="table table-bordered table-hover table-striped">
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>3326</td>
                              <td>10/21/2013</td>
                              <td>3:29 PM</td>
                              <td>$321.33</td>
                            </tr>
                            <tr>
                              <td>3325</td>
                              <td>10/21/2013</td>
                              <td>3:20 PM</td>
                              <td>$234.34</td>
                            </tr>
                            <tr>
                              <td>3324</td>
                              <td>10/21/2013</td>
                              <td>3:03 PM</td>
                              <td>$724.17</td>
                            </tr>
                            <tr>
                              <td>3323</td>
                              <td>10/21/2013</td>
                              <td>3:00 PM</td>
                              <td>$23.71</td>
                            </tr>
                            <tr>
                              <td>3322</td>
                              <td>10/21/2013</td>
                              <td>2:49 PM</td>
                              <td>$8345.23</td>
                            </tr>
                            <tr>
                              <td>3321</td>
                              <td>10/21/2013</td>
                              <td>2:23 PM</td>
                              <td>$245.12</td>
                            </tr>
                            <tr>
                              <td>3320</td>
                              <td>10/21/2013</td>
                              <td>2:15 PM</td>
                              <td>$5663.54</td>
                            </tr>
                            <tr>
                              <td>3319</td>
                              <td>10/21/2013</td>
                              <td>2:13 PM</td>
                              <td>$943.45</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* /.table-responsive */}
                      </div>
                      {/* /.col-lg-4 (nested) */}
                      <div className="col-lg-8">
                        <div id="morris-bar-chart"/>
                      </div>
                      {/* /.col-lg-8 (nested) */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-clock-o fa-fw"/> Responsive Timeline
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge"><i className="fa fa-check"/>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>

                            <p>
                              <small className="text-muted"><i className="fa fa-clock-o"/>
                                11 hours ago via Twitter
                              </small>
                            </p>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Libero laboriosam dolor perspiciatis omnis exercitationem.
                              Beatae, officia pariatur? Est cum veniam excepturi. Maiores
                              praesentium, porro voluptas suscipit facere rem dicta,
                              debitis.</p>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-badge warning"><i
                          className="fa fa-credit-card"/>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Autem dolorem quibusdam, tenetur commodi provident cumque
                              magni voluptatem libero, quis rerum. Fugiat esse debitis
                              optio, tempore. Animi officiis alias, officia
                              repellendus.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Laudantium maiores odit qui est tempora eos, nostrum
                              provident explicabo dignissimos debitis vel! Adipisci eius
                              voluptates, ad aut recusandae minus eaque facere.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-badge danger"><i className="fa fa-bomb"/>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Repellendus numquam facilis enim eaque, tenetur nam id qui
                              vel velit similique nihil iure molestias aliquam, voluptatem
                              totam quaerat, magni commodi quisquam.</p>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Voluptates est quaerat asperiores sapiente, eligendi, nihil.
                              Itaque quos, alias sapiente rerum quas odit! Aperiam
                              officiis quidem delectus libero, omnis ut debitis!</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-badge info"><i className="fa fa-save"/>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Nobis minus modi quam ipsum alias at est molestiae excepturi
                              delectus nesciunt, quibusdam debitis amet, beatae
                              consequuntur impedit nulla qui! Laborum, atque.</p>
                            <hr />
                            <div className="btn-group">
                              <button type="button"
                                      className="btn btn-primary btn-sm dropdown-toggle"
                                      data-toggle="dropdown">
                                <i className="fa fa-gear"/> <span className="caret"/>
                              </button>
                              <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Action</a>
                                </li>
                                <li><a href="#">Another action</a>
                                </li>
                                <li><a href="#">Something else here</a>
                                </li>
                                <li className="divider"/>
                                <li><a href="#">Separated link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis
                              nam! Quod, quisquam. Officia quam qui adipisci quas
                              consequuntur nostrum sequi. Consequuntur, commodi.</p>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-badge success"><i
                          className="fa fa-graduation-cap"/>
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Lorem ipsum dolor</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Deserunt obcaecati, quaerat tempore officia voluptas debitis
                              consectetur culpa amet, accusamus dolorum fugiat, animi
                              dicta aperiam, enim incidunt quisquam maxime neque
                              eaque.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
              {/* /.col-lg-8 */}
              <div className="col-lg-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-bell fa-fw"/> Notifications Panel
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <i className="fa fa-comment fa-fw"/> New Comment
                      <span className="pull-right text-muted small"><em>4 minutes ago</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-twitter fa-fw"/> 3 New Followers
                      <span className="pull-right text-muted small"><em>12 minutes ago</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-envelope fa-fw"/> Message Sent
                      <span className="pull-right text-muted small"><em>27 minutes ago</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-tasks fa-fw"/> New Task
                      <span className="pull-right text-muted small"><em>43 minutes ago</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-upload fa-fw"/> Server Rebooted
                      <span className="pull-right text-muted small"><em>11:32 AM</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-bolt fa-fw"/> Server Crashed!
                      <span className="pull-right text-muted small"><em>11:13 AM</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-warning fa-fw"/> Server Not Responding
                      <span className="pull-right text-muted small"><em>10:57 AM</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-shopping-cart fa-fw"/> New Order Placed
                      <span className="pull-right text-muted small"><em>9:49 AM</em>
                      </span>
                      </a>
                      <a href="#" className="list-group-item">
                        <i className="fa fa-money fa-fw"/> Payment Received
                      <span className="pull-right text-muted small"><em>Yesterday</em>
                      </span>
                      </a>
                    </div>
                    {/* /.list-group */}
                    <a href="#" className="btn btn-default btn-block">View All Alerts</a>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"/> Donut Chart Example
                  </div>
                  <div className="panel-body">
                    <div id="morris-donut-chart"/>
                    <a href="#" className="btn btn-default btn-block">View Details</a>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="chat-panel panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-comments fa-fw"/>
                    Chat
                    <div className="btn-group pull-right">
                      <button type="button" className="btn btn-default btn-xs dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-chevron-down"/>
                      </button>
                      <ul className="dropdown-menu slidedown">
                        <li>
                          <a href="#">
                            <i className="fa fa-refresh fa-fw"/> Refresh
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-check-circle fa-fw"/> Available
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-times fa-fw"/> Busy
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o fa-fw"/> Away
                          </a>
                        </li>
                        <li className="divider"/>
                        <li>
                          <a href="#">
                            <i className="fa fa-sign-out fa-fw"/> Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <ul className="chat">
                      <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle"/>
                      </span>

                        <div className="chat-body clearfix">
                          <div className="header">
                            <strong className="primary-font">Jack Sparrow</strong>
                            <small className="pull-right text-muted">
                              <i className="fa fa-clock-o fa-fw"/> 12 mins ago
                            </small>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur bibendum ornare dolor, quis ullamcorper ligula
                            sodales.
                          </p>
                        </div>
                      </li>
                      <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle"/>
                      </span>

                        <div className="chat-body clearfix">
                          <div className="header">
                            <small className=" text-muted">
                              <i className="fa fa-clock-o fa-fw"/> 13 mins ago
                            </small>
                            <strong className="pull-right primary-font">Bhaumik
                              Patel</strong>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur bibendum ornare dolor, quis ullamcorper ligula
                            sodales.
                          </p>
                        </div>
                      </li>
                      <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle"/>
                      </span>

                        <div className="chat-body clearfix">
                          <div className="header">
                            <strong className="primary-font">Jack Sparrow</strong>
                            <small className="pull-right text-muted">
                              <i className="fa fa-clock-o fa-fw"/> 14 mins ago
                            </small>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur bibendum ornare dolor, quis ullamcorper ligula
                            sodales.
                          </p>
                        </div>
                      </li>
                      <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle"/>
                      </span>

                        <div className="chat-body clearfix">
                          <div className="header">
                            <small className=" text-muted">
                              <i className="fa fa-clock-o fa-fw"/> 15 mins ago
                            </small>
                            <strong className="pull-right primary-font">Bhaumik
                              Patel</strong>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur bibendum ornare dolor, quis ullamcorper ligula
                            sodales.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.panel-body */}
                  <div className="panel-footer">
                    <div className="input-group">
                      <input id="btn-input" type="text" className="form-control input-sm"
                             placeholder="Type your message here..."/>
                    <span className="input-group-btn">
                      <button className="btn btn-warning btn-sm" id="btn-chat">
                        Send
                      </button>
                    </span>
                    </div>
                  </div>
                  {/* /.panel-footer */}
                </div>
                {/* /.panel .chat-panel */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /#page-wrapper */}
        </div>
        {/* /#wrapper */}
      </DefaultLayout>
    );
  }
});

module.exports = index;
