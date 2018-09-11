let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  country:{
    type: String,
    required: true
  },
  author:{
    type: String,
    require: true
  },
  gold:{
    type: Number,
    required: true
  },
  silver:{
    type: Number,
    required: true
  },
  bronze:{
    type: Number,
    required: true
  }
});

let Article = module.exports = mongoose.model('Article', articleSchema);
