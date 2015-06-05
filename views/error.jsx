var React = require('react');
var BlankLayout = require('./layouts/blank');

var index = React.createClass({
  render: function () {
    return (
      <BlankLayout title={this.props.title}>
        <link href="/css/error.css" rel="stylesheet"/>
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong>
          <p>{this.props.message}</p>
        </div>
      </BlankLayout>
    );
  }
});

module.exports = index;
