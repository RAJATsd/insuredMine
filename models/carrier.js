const mongoose = require("mongoose");

const schema = mongoose.Schema;

const carrierSchema = new schema({
  company_name:{
      type:String
  }
});

module.exports = mongoose.model("carrier", carrierSchema);
