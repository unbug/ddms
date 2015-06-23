require('date-utils');
var React = require('react');
var DefaultLayout = require('../layouts/default');
var Navigation = require('../components/navigation');

var ListTags = React.createClass({
  render: function(){
    var tags = this.props.data || '';
    var list = tags.split(',').map(function (key, index) {
      return (
        <a href={'/images/?tags='+key} style={{marginRight: '8px;'}}>{key}</a>
      );
    });
    return(
      <li><p>Tags: </p><p>{list}</p></li>
    )
  }
});

var ListBody = React.createClass({
  render: function(){
    var list = this.props.data.map(function (key, index) {
      return (
        <tr>
          <td style={{overflow:'hidden',maxHeight: '160px',display: 'inline-block'}}><img className="img-responsive img-thumbnail" style={{width: '160px'}} src={key.url} /></td>
          <td>
            <ul>
              <li>Created: {key.createDateTime && key.createDateTime.toFormat('YY-MM-DD HH24:MI:SS')}</li>
              <li>{key.url}</li>
              <li><a target="_blank" href="javascript:void(0)" data-clipboard-text={key.url}><i className="fa fa-copy fa-fw"></i> Copy URL</a></li>
              <li><a target="_blank" href={key.url}><i className="fa fa-link fa-fw"></i> Open</a></li>
              <li><a href={'/images/delete/'+key._id}><i className="fa fa-times fa-w"></i> Delete</a></li>
              <ListTags data={key.tags}/>
            </ul>
          </td>
        </tr>
      );
    });
    return(
      <tbody>{list}</tbody>
    )
  }
});

module.exports = React.createClass({
  render: function () {
    var data = this.props.images;
    var scripts = ['/bower_components/zeroclipboard/dist/ZeroClipboard.js'];
    return (
      <DefaultLayout title="Images" scripts={scripts}>
        <div id="wrapper">
          {/* Navigation */}
          <Navigation></Navigation>
          <div id="page-wrapper">
            <div className="row row-same-height">
              <div className="col-xs-10 col-xs-height"><h3>Images</h3></div>
              <div className="col-xs-2 col-xs-height col-middle"><a href="/images/create"
                                                                    className="btn btn-default btn-circle pull-right"><i
                className="fa fa-plus"></i></a></div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Project List
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="dataTable_wrapper">
                      <table className="table table-striped table-bordered table-hover table-condensed" id="dataTables-example">
                        <thead>
                        <tr>
                          <th>Image</th>
                          <th>Meta</th>
                        </tr>
                        </thead>
                        <ListBody data={data}/>
                      </table>
                    </div>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /#page-wrapper */}
        </div>
        <script dangerouslySetInnerHTML={{__html:`
            $(document).ready(function() {
              $('#dataTables-example').DataTable({
                responsive: true
              });

              var zcb = new ZeroClipboard( $("a[data-clipboard-text]") );
            })
          `}}/>
      </DefaultLayout>
    );
  }
});
