var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  render: function () {
    var data = this.props.project;
    var scripts = [
        '/js/components/Forms.add.js?jsx',
        '/ckeditor/ckeditor.js',
        '/ckeditor/adapters/jquery.js',
        ];
    return (
      <DefaultLayout title="Create Form" scripts={scripts}>
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3>Forms / Create a new form</h3></div>
            </div>
            <div id="form-wrapper"></div>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html:`
            window.__projectData = ${JSON.stringify(data)};
          `}}/>
      </DefaultLayout>
    );
  }
});
