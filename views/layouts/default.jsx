var React = require('react');

var DefaultLayout = React.createClass({
	render: function() {
		return (
				<html>
					<head>
						<title>{this.props.title}</title>
						<link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
						<link href="/bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet" />
						<link href="/stylesheets/sb-admin-2.css" rel="stylesheet" />
						<link href="../bower_components/bootstrap-social/bootstrap-social.css" rel="stylesheet"/>
						<link href="/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
					</head>
					<body role="document" ontuchstart="">

					{this.props.children}

					<script src="/bower_components/jquery/dist/jquery.min.js"></script>
					<script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
					<script src="/bower_components/metisMenu/dist/metisMenu.min.js"></script>
					<script src="/javascripts/sb-admin-2.js"></script>
					</body>
				</html>
			);
	}
});

module.exports = DefaultLayout;