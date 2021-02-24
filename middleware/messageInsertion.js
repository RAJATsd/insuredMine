const messageSchema = require("../models/message");

exports.insertionObject = {};

exports.insertionMiddleware = () => {
  const currentDate = new Date().toJSON().slice(0, 10);
  const currentTime = new Date().getHours() + ":" + new Date().getMinutes();
  if (!(currentDate in this.insertionObject)) {
    return;
  }
  if (!(currentTime in this.insertionObject[currentDate])) {
    return;
  }
  this.insertionObject[currentDate][currentTime].forEach(async(oneMsg) => {
    const newMsg = new messageSchema({
        date:currentDate,
        time:currentTime,
        message:oneMsg
    });
    await newMsg.save();
  });
};
