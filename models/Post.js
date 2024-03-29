const {Schema, model} = require('mongoose');


const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {timestamps:true});

module.exports = model('Post', PostSchema);