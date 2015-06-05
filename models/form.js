var Promise = require("bluebird"),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  Mixed = Schema.Types.Mixed,
  shortid = require('shortid');

var form = new Schema({
  user: {type: ObjectId, ref: 'User'},
  sid: {type: String, unique: true,'default': shortid.generate },
  title: {
    type: String,
    required: true,
    default: 'New Form'
  },
  desc: String,
  createDateTime: {
    type: Date,
    default: Date.now
  },
  updateDateTime: {
    type: Date,
    default: Date.now
  },
  schemata: Mixed
});

form.static({
  list: function (callback) {
    return this.find()
      .populate('user',{_id: 1,name:1,email: 1,role: 1})
      .sort({_id: -1})
      .exec(callback)
  }
});

module.exports = mongoose.model('Form', form);
