var url = require('url');

exports.addQuery = function addQuery(strUrl,query) {
  var obj = url.parse(strUrl, true, false);
  if(query){
    for(var key in query){
      obj.query[key] = query[key];
    }
  }
  obj.search = null;
  delete obj.search; // this makes format compose the search string out of the query object
  return url.format(obj);
}

