var _ = require('underscore');

module.exports = function(obj,code,msg){
  obj = obj || {data: []};
  code = code==undefined? 1: code;
  msg = msg || (code?'success':'failure');

  obj = _.extend(obj,{
    code: code,
    msg: msg
  });

  return obj;
}
