const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userAccountSchema = new schema({
  account_name:{
      type:String
  }
});

module.exports = mongoose.model("userAccount", userAccountSchema);
