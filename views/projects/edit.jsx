var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

module.exports = React.createClass({
  render: function () {
    var data = this.props.project || {};
    return (
      <DefaultLayout title="Edit Project">
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-12 col-xs-height"><h3>Projects / Edit project</h3></div>
            </div>
            <form role="form" method="POST" action="/projects/update">
              <div className="form-group">
                {function () {
                  if (data.error) {
                    return <div className="alert alert-danger" role="alert">{data.error}</div>
                  }
                }.call(this)}
              </div>
              {function () {
                if (data._id) {
                  return (<input type="hidden" className="form-control" id="id" name="id" defaultValue={data._id} />)
                }
              }.call(this)}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" name="name" defaultValue={data.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input type="text" className="form-control" id="desc" placeholder="Description" name="desc" defaultValue={data.desc}/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
});
