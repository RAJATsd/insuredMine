const mongoose = require("mongoose");

const schema = mongoose.Schema;

const policyInfoSchema = new schema({
  policy_number: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  policy_category: { type: schema.Types.ObjectId, ref: "lob" },
  companyId: { type: schema.Types.ObjectId, ref: "carrier" },
  userId: { type: schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("policyInfo", policyInfoSchema);
