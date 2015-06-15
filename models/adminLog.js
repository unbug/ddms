var Promise = require("bluebird"),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  Mixed = Schema.Types.Mixed;

var adminLog = new Schema({
  user: {type: ObjectId, ref: 'User'},
  userName: {
    type: String,
    default: 'Anonymous'
  },
  log: String,
  createDateTime: {
    type: Date,
    default: Date.now
  }
});

adminLog.static({
  list: function (callback) {
    return this.find()
      .populate('user',{_id: 1,name:1,email: 1,role: 1})
      .limit(1000)
      .sort({_id: -1})
      .exec(callback);
  }
});

module.exports = mongoose.model('AdminLog', adminLog);
