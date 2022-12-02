const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String },
  description: { type: String },
  created: { type: Number, default: Date.now() },
});

module.exports = mongoose.model("Post", Post);
