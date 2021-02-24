//const { Worker } = require("worker_threads");
//const os = require("os");
const fs = require("fs");
const msg = "INTERNAL SERVER ERROR";
const csvToJson = require("csvtojson");
const path = require("path");

const userModel = require("../models/user");
const userAccountModel = require("../models/user_account");
const agentModel = require("../models/agent");
const carrierModel = require("../models/carrier");
const policyCategoryModel = require("../models/policy_category");
const policyInfoModel = require("../models/policy_info");

const { insertionObject } = require("../middleware/messageInsertion");
//const workerPath = path.resolve("./controllers/insertWorker.js");
//const numberOfCores = os.cpus().length;

exports.insertCsvContent = async (req, res, next) => {
  try {
    // const savedAgent =  await agentModel.findOne({
    //   name:"aosdjasd"
    // });
    // const savedCategory = await new policyCategoryModel({
    //   category_name:"asdhaud"
    // }).save();
    // const savedAccount = await new userAccountModel({
    //   account_name:"asdhad"
    // }).save();
    // const savedCarrier = await carrierModel.findOne({
    //   company_name:"iwherewr"
    //});
    // const csvData = req.file.buffer.toString("utf8");
    // console.log(csvData);
    // const convertedData = await csvToJson().fromString(csvData);
    // console.log(convertedData);
    const csvData = req.file.buffer.toString("utf8");
    const convertedData = await csvToJson().fromString(csvData);

    convertedData.forEach(async (row) => {
      try {
        let ifAgent = await agentModel.findOne({
          name: row.name,
        });
        let policy_category = await policyCategoryModel.findOne({
          category_name: row.category_name,
        });
        let policyCarrier = await carrierModel.findOne({
          company_name: row.company_name,
        });
        let accountName = await userAccountModel.findOne({
          account_name: row.account_name,
        });
        if (!ifAgent) {
          const newAgent = new agentModel({
            name: row.name,
          });
          await newAgent.save();
        }
        if (!policy_category) {
          const newCategory = new policyCategoryModel({
            category_name: row.category_name,
          });
          policy_category = await newCategory.save();
        }
        if (!policyCarrier) {
          const newCarrier = new carrierModel({
            company_name: row.company_name,
          });
          policyCarrier = await newCarrier.save();
        }
        if (!accountName) {
          const newAccount = new userAccountModel({
            account_name: row.account_name,
          });
          await newAccount.save();
        }
        const newUser = new userModel({
          first_name: row.firstname,
          dob: row.dob,
          address: row.address,
          phone: row.phone,
          state: row.state,
          zip_code: row.zip,
          email: row.email,
          gender: row.gender,
          userType: row.userType,
        });
        const savedUser = await newUser.save();
        const newPolicyInfo = new policyInfoModel({
          policy_number: row.policy_number,
          start_date: row.policy_start_date,
          end_date: row.policy_end_date,
          policy_category: policy_category._id,
          companyId: policyCarrier._id,
          userId: savedUser._id,
        });
        await newPolicyInfo.save();
      } catch (e) {
        console.log(e);
      }
    });
    res.json({
      success: true,
      msg: "Interted Your Data Successfully",
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      msg,
    });
  }
};

exports.findPolicyInfo = async (req, res, next) => {
  try {
    const { userName } = req.params;
    const userInfo = await userModel.findOne({ first_name: userName });
    const policyInfo = await policyInfoModel
      .findOne({ userId: userInfo._id })
      .populate("userId")
      .populate("companyId")
      .populate("policy_category");
    res.json({
      success: true,
      msg: policyInfo,
    });
  } catch (e) {
    res.json({
      success: false,
      msg,
    });
  }
};

exports.insertMessage = (req, res, next) => {
  try {
    const { message, date, time } = req.body;
    if (date in insertionObject) {
      if (time in insertionObject[date]) {
        insertionObject[date][time].push(message);
      } else {
        insertionObject[date][time] = [message];
      }
    } else {
      insertionObject[date] = {
        [time]: [message],
      };
    }
    res.json({
      success:true,
      msg:"Your message will be inserted at a stipulated time"
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      msg: "Internal server error",
    });
  }
};
