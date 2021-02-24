const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cron = require("cron");

const { insertionMiddleware } = require("./middleware/messageInsertion");
const mainRoutes = require("./routes/main");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/insuredMine";
const SERVER_PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use(bodyParser.json());

const cronJob = cron.CronJob;
const job = new cronJob("0 */1 * * * *", insertionMiddleware, null, true);

job.start();

app.use("/csv", mainRoutes);

mongoose
  .connect(MONGO_URI)
  .then((res) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Serving at port ${SERVER_PORT}`));
