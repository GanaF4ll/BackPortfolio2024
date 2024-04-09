const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tagSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tag", tagSchema);
