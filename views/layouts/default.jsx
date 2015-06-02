var React = require('react');

var DefaultLayout = React.createClass({
  getDefaultProps: function(){
    return {
      scripts: [],
      styles: []
    };
  },
  render: function () {
    var scripts = this.props.scripts.map(function(src, idx) {
      return <script type="text/jsx" key={idx} src={src}></script>
    });

    var styles = this.props.styles.map(function(src, idx) {
      return <link key={idx} rel="stylesheet" href={src}/>
    });
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet"/>
        <link href="/stylesheets/sb-admin-2.css" rel="stylesheet"/>
        <link href="/bower_components/bootstrap-social/bootstrap-social.css" rel="stylesheet"/>
        <link href="/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        {styles}
      </head>
      <body role="document" ontuchstart="">
      {this.props.children}
      <script src="/bower_components/jquery/dist/jquery.min.js"></script>
      <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="/bower_components/metisMenu/dist/metisMenu.min.js"></script>
      <script src="/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
      <script src="/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
      <script src="/js/sb-admin-2.js"></script>
      <script src="/bower_components/react/JSXTransformer.js"></script>
      <script src="/bower_components/react/react-with-addons.js"></script>
      <script src="/bower_components/ReactiveElements/dist/reactive-elements.js"></script>
      {scripts}
      </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
