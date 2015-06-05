var Promise = require("bluebird"),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  Mixed = Schema.Types.Mixed;

var formData = new Schema({
  form: {type: ObjectId, ref: 'Form'},
  createDateTime: {
    type: Date,
    default: Date.now
  },
  updateDateTime: {
    type: Date,
    default: Date.now
  },
  data: Mixed
});

formData.static({
  list: function (callback) {
    return this.find()
      .populate('form',{_id: 1,sid:1,title: 1,desc: 1,schemata: 1})
      .sort({_id: -1})
      .exec(callback);
  },
  listByFormId: function (formid,callback) {
    return this.find({form: formid})
      .sort({_id: -1})
      .exec(callback);
  }
});

module.exports = mongoose.model('FormData', formData);
