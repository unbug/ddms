var React = require('react');

var BlankLayout = React.createClass({
  render: function () {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
      </head>
      <body role="document" ontuchstart="">
      {this.props.children}
      </body>
      </html>
    );
  }
});

module.exports = BlankLayout;
