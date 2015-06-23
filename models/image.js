var Promise = require("bluebird"),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  Mixed = Schema.Types.Mixed;

var image = new Schema({
  url: String,
  tags: String,
  createDateTime: {
    type: Date,
    default: Date.now
  }
});

image.static({
  list: function (callback) {
    return this.find()
      .limit(500)
      .sort({_id: -1})
      .exec(callback);
  },
  listByTags: function (tags,callback) {
    return this.find({
        tags: function(){

        }
      })
      .limit(500)
      .sort({_id: -1})
      .exec(callback);
  }
});

module.exports = mongoose.model('Image', image);
