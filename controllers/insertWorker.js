const { parentPort, workerData } = require("worker_threads");

const fileInfo = workerData;

const convertToJson = async (file) => {
  const csvData = file.buffer.toString("utf8");
  console.log(csvData);
  const convertedData = await csvToJson().fromString(csvData);
  console.log("abc");
  console.log(convertedData);
  parentPort.postMessage(convertedData);
};

convertToJson(fileInfo);

// const insertData = async (allRows) => {
//   const ifAgent = await agentModel.findOne({ name: "asdsd" });
//   //   allRows.forEach(async (row) => {
//   //     const ifAgent = await agentModel.findOne({name:row.name});
//   //     // let policy_category = await policyCategoryModel.findOne({
//   //   category_name: row.category_name,
//   // });
//   // let policyCarrier = await carrierModel.findOne({
//   //   company_name: row.company_name,
//   // });
//   // let accountName = await userAccountModel.findOne({
//   //   account_name: row.account_name,
//   // });
//   // if (!ifAgent) {
//   //   const newAgent = new agentModel({ name: row.name });
//   //   await newAgent.save();
//   // }
//   // if (!policy_category) {
//   //   const newCategory = new policyCategoryModel({
//   //     category_name: row.category_name,
//   //   });
//   //   policy_category = await newCategory.save();
//   // }
//   // if (!policyCarrier) {
//   //   const newCarrier = new carrierModel({ company_name: row.company_name });
//   //   policyCarrier = await newCarrier.save();
//   // }
//   // if (!accountName) {
//   //   const newAccount = new userAccountModel({
//   //     account_name: row.account_name,
//   //   });
//   //   await newAccount.save();
//   // }
//   // const newUser = new userModel({
//   //   first_name: row.firstname,
//   //   dob: row.dob,
//   //   address: row.address,
//   //   phone: row.phone,
//   //   state: row.state,
//   //   zip_code: row.zip,
//   //   email: row.email,
//   //   gender: row.gender,
//   //   userType: row.userType,
//   // });
//   // const savedUser = await newUser.save();
//   // const newPolicyInfo = new policyInfoModel({
//   //   policy_number: row.policy_number,
//   //   start_date: row.policy_start_date,
//   //   end_date: row.policy_end_date,
//   //   policy_category: policy_category._id,
//   //   companyId: policyCarrier._id,
//   //   userId: savedUser._id,
//   // });
//   // await newPolicyInfo.save();
//   // });
// };
