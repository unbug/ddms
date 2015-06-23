var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  render: function () {
    var uploadConfig = this.props.uploadConfig;
    var scripts = [
      '/js/components/Images.add.js'
    ];
    return (
      <DefaultLayout title="Add Image" scripts={scripts}>
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row">
              <div className="col-xs-12"><h3>Images / Add a new image</h3></div>
            </div>
            <iframe name="_if" id="_if" style={{display: 'none'}} src="javascript:void(0)"></iframe>
            <form role="form" id="upload_form" target="_if" method="POST" encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="file">Upload a new image</label>
                <input type="file" className="form-control" id="file" name="file"/>
              </div>
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input type="text" className="form-control" id="tags" name="tags" placeholder="tag1,tag2,tag3"/>
              </div>
              <button type="submit" className="btn btn-default">Upload</button>
            </form>
            <div className="row row-same-height">
              <div className="col-xs-12"><h3>Or</h3></div>
            </div>
            <form role="form" id="add_form">
              <div className="form-group">
                <label htmlFor="link">Add a new image link</label>
                <input type="text" className="form-control" id="link" name="link" placeholder="http://cdn.mydomain.com/images/test.jpg"/>
              </div>
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input type="text" className="form-control" id="tags" name="tags" placeholder="tag1,tag2,tag3"/>
              </div>
              <button type="button" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html:`
            window.__upload_config = ${JSON.stringify(uploadConfig)};
          `}}/>
      </DefaultLayout>
    );
  }
});
