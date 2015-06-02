var React = require('react');
var DefaultLayout = require('./layouts/default');

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <link href="/stylesheets/error.css" rel="stylesheet"/>
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong>

          <p>{this.props.message}</p>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = index;
