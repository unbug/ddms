var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: String,
  text: String,
  published: {
    type: Boolean,
    default: false
  },
  slug: {
    type: String,
    set: function (value) {
      return value.toLowerCase().replace(' ', '-')
    }
  }
});

articleSchema.static({
  list: function (callback) {
    this.find({}, null, {sort: {_id: -1}}, callback);
  }
})
module.exports = mongoose.model('Article', articleSchema);
