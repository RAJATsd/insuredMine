const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  first_name: { type: String },
  dob: { type: Date },
  address: { type: String },
  phone: { type: String },
  state: { type: String },
  zip_code: { type: String },
  email: { type: String },
  gender: { type: String },
  userType: { type: String },
});

module.exports = mongoose.model("user", userSchema);
