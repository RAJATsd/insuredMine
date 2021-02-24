const mongoose = require("mongoose");

const schema = mongoose.Schema;

const lobSchema = new schema({
  category_name:{
      type:String
  }
});

module.exports = mongoose.model("lob", lobSchema);
