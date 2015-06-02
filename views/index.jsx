var React = require('react');
var DefaultLayout = require('./layouts/default');

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          {/* Fixed navbar */}
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
                <a className="navbar-brand" href="#">Bootstrap theme</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown
                      <span className="caret"/></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="divider"/>
                      <li className="dropdown-header">Nav header</li>
                      <li><a href="#">Separated link</a></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </nav>
          <div className="container theme-showcase" role="main">
            {/* Main jumbotron for a primary marketing message or call to action */}
            <div className="jumbotron">
              <h1>Theme example</h1>

              <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting
                point to create something more unique by building on or modifying it.</p>
            </div>
            <div className="page-header">
              <h1>Buttons</h1>
            </div>
            <p>
              <button type="button" className="btn btn-lg btn-default">Default</button>
              <button type="button" className="btn btn-lg btn-primary">Primary</button>
              <button type="button" className="btn btn-lg btn-success">Success</button>
              <button type="button" className="btn btn-lg btn-info">Info</button>
              <button type="button" className="btn btn-lg btn-warning">Warning</button>
              <button type="button" className="btn btn-lg btn-danger">Danger</button>
              <button type="button" className="btn btn-lg btn-link">Link</button>
            </p>
            <p>
              <button type="button" className="btn btn-default">Default</button>
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-success">Success</button>
              <button type="button" className="btn btn-info">Info</button>
              <button type="button" className="btn btn-warning">Warning</button>
              <button type="button" className="btn btn-danger">Danger</button>
              <button type="button" className="btn btn-link">Link</button>
            </p>
            <p>
              <button type="button" className="btn btn-sm btn-default">Default</button>
              <button type="button" className="btn btn-sm btn-primary">Primary</button>
              <button type="button" className="btn btn-sm btn-success">Success</button>
              <button type="button" className="btn btn-sm btn-info">Info</button>
              <button type="button" className="btn btn-sm btn-warning">Warning</button>
              <button type="button" className="btn btn-sm btn-danger">Danger</button>
              <button type="button" className="btn btn-sm btn-link">Link</button>
            </p>
            <p>
              <button type="button" className="btn btn-xs btn-default">Default</button>
              <button type="button" className="btn btn-xs btn-primary">Primary</button>
              <button type="button" className="btn btn-xs btn-success">Success</button>
              <button type="button" className="btn btn-xs btn-info">Info</button>
              <button type="button" className="btn btn-xs btn-warning">Warning</button>
              <button type="button" className="btn btn-xs btn-danger">Danger</button>
              <button type="button" className="btn btn-xs btn-link">Link</button>
            </p>
            <div className="page-header">
              <h1>Tables</h1>
            </div>
            <div className="row">
              <div className="col-md-6">
                <table className="table">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <table className="table table-bordered">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td rowspan={2}>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@TwBootstrap</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-condensed">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="page-header">
              <h1>Thumbnails</h1>
            </div>
            <img data-src="holder.js/200x200"
                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9Ijc0LjA0Njg3NSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjAweDIwMDwvdGV4dD48L2c+PC9zdmc+"
                 className="img-thumbnail"
                 alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera"/>

            <div className="page-header">
              <h1>Labels</h1>
            </div>
            <h1>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h1>

            <h2>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h2>

            <h3>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h3>
            <h4>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h4>
            <h5>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h5>
            <h6>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h6>

            <p>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </p>

            <div className="page-header">
              <h1>Badges</h1>
            </div>
            <p>
              <a href="#">Inbox <span className="badge">42</span></a>
            </p>
            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="active"><a href="#">Home <span className="badge">42</span></a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages <span className="badge">3</span></a></li>
            </ul>
            <div className="page-header">
              <h1>Dropdown menus</h1>
            </div>
            <div className="dropdown theme-dropdown clearfix">
              <a id="dropdownMenu1" href="#" className="sr-only dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-expanded="false">Dropdown <span className="caret"/></a>
              <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                <li className="active" role="presentation"><a role="menuitem" tabindex={-1} href="#">Action</a></li>
                <li role="presentation"><a role="menuitem" tabindex={-1} href="#">Another action</a></li>
                <li role="presentation"><a role="menuitem" tabindex={-1} href="#">Something else here</a></li>
                <li role="presentation" className="divider"/>
                <li role="presentation"><a role="menuitem" tabindex={-1} href="#">Separated link</a></li>
              </ul>
            </div>
            <div className="page-header">
              <h1>Navs</h1>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            <div className="page-header">
              <h1>Navbars</h1>
            </div>
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                          data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                  </button>
                  <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                         aria-expanded="false">Dropdown <span className="caret"/></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"/>
                        <li className="dropdown-header">Nav header</li>
                        <li><a href="#">Separated link</a></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/*/.nav-collapse */}
              </div>
            </nav>
            <nav className="navbar navbar-inverse">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                          data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                  </button>
                  <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                         aria-expanded="false">Dropdown <span className="caret"/></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"/>
                        <li className="dropdown-header">Nav header</li>
                        <li><a href="#">Separated link</a></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/*/.nav-collapse */}
              </div>
            </nav>
            <div className="page-header">
              <h1>Alerts</h1>
            </div>
            <div className="alert alert-success" role="alert">
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>
            <div className="alert alert-info" role="alert">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>
            <div className="alert alert-warning" role="alert">
              <strong>Warning!</strong> Best check yo self, you're not looking too good.
            </div>
            <div className="alert alert-danger" role="alert">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
            <div className="page-header">
              <h1>Progress bars</h1>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
                   style={{width: '60%'}}><span className="sr-only">60% Complete</span></div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0}
                   aria-valuemax={100} style={{width: '40%'}}><span className="sr-only">40% Complete (success)</span>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0}
                   aria-valuemax={100} style={{width: '20%'}}><span className="sr-only">20% Complete</span></div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0}
                   aria-valuemax={100} style={{width: '60%'}}><span className="sr-only">60% Complete (warning)</span>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0}
                   aria-valuemax={100} style={{width: '80%'}}><span className="sr-only">80% Complete (danger)</span>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={60} aria-valuemin={0}
                   aria-valuemax={100} style={{width: '60%'}}><span className="sr-only">60% Complete</span></div>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-success" style={{width: '35%'}}><span className="sr-only">35% Complete (success)</span>
              </div>
              <div className="progress-bar progress-bar-warning" style={{width: '20%'}}><span className="sr-only">20% Complete (warning)</span>
              </div>
              <div className="progress-bar progress-bar-danger" style={{width: '10%'}}><span className="sr-only">10% Complete (danger)</span>
              </div>
            </div>
            <div className="page-header">
              <h1>List groups</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="list-group">
                  <a href="#" className="list-group-item active">
                    Cras justo odio
                  </a>
                  <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
                  <a href="#" className="list-group-item">Morbi leo risus</a>
                  <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                  <a href="#" className="list-group-item">Vestibulum at eros</a>
                </div>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="list-group">
                  <a href="#" className="list-group-item active">
                    <h4 className="list-group-item-heading">List group item heading</h4>

                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                      diam eget risus varius blandit.</p>
                  </a>
                  <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">List group item heading</h4>

                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                      diam eget risus varius blandit.</p>
                  </a>
                  <a href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">List group item heading</h4>

                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                      diam eget risus varius blandit.</p>
                  </a>
                </div>
              </div>
              {/* /.col-sm-4 */}
            </div>
            <div className="page-header">
              <h1>Panels</h1>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">
                    Panel content
                  </div>
                </div>
              </div>
              {/* /.col-sm-4 */}
            </div>
            <div className="page-header">
              <h1>Wells</h1>
            </div>
            <div className="well">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit
                sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis
                mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="page-header">
              <h1>Carousel</h1>
            </div>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to={0} className="active"/>
                <li data-target="#carousel-example-generic" data-slide-to={1}/>
                <li data-target="#carousel-example-generic" data-slide-to={2}/>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img data-src="holder.js/1140x500/auto/#777:#555/text:First slide"
                       src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjQwMy4xMDkzNzUiIHk9IjI1MCIgc3R5bGU9ImZpbGw6IzU1NTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZTo1M3B0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPkZpcnN0IHNsaWRlPC90ZXh0PjwvZz48L3N2Zz4="
                       alt="First slide"/>
                </div>
                <div className="item">
                  <img data-src="holder.js/1140x500/auto/#666:#444/text:Second slide"
                       src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzY2NiIvPjxnPjx0ZXh0IHg9IjM1Mi4wNjI1IiB5PSIyNTAiIHN0eWxlPSJmaWxsOiM0NDQ7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NTNwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj5TZWNvbmQgc2xpZGU8L3RleHQ+PC9nPjwvc3ZnPg=="
                       alt="Second slide"/>
                </div>
                <div className="item">
                  <img data-src="holder.js/1140x500/auto/#555:#333/text:Third slide"
                       src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTE0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMTQwIDUwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMTQwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzU1NSIvPjxnPjx0ZXh0IHg9IjM5MS4zNTkzNzUiIHk9IjI1MCIgc3R5bGU9ImZpbGw6IzMzMztmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZTo1M3B0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPlRoaXJkIHNsaWRlPC90ZXh0PjwvZz48L3N2Zz4="
                       alt="Third slide"/>
                </div>
              </div>
              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* /container */}
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = index;
