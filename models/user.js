var Promise = require("bluebird"),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  Mixed = Schema.Types.Mixed;

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    set: function (value) {
      return value.trim().toLowerCase()
    },
    validate: [
      function (email) {
        return (email.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i) != null)
      },
      'Invalid email'
    ]
  },
  name: String,
  password: String,
  twitterid: String,
  //Editor,Administrator,Register
  role: {
    type: String,
    default: 'Register'
  },
  createDateTime: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  twitter: Mixed
});

userSchema.static({
  list: function (callback) {
    return this.find()
      .sort({_id: -1})
      .exec(callback);
  }
});

module.exports = mongoose.model('User', userSchema);
