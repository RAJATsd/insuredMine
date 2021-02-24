const express = require("express");
const mainController = require("../controllers/main");
const uploadMiddleware = require('../middleware/multer');

const router = express.Router();

router.post('/insertCsv',uploadMiddleware,mainController.insertCsvContent);
router.post('/insertMessage',mainController.insertMessage);

router.get('/getPolicyInfo/:userName',mainController.findPolicyInfo);

module.exports = router;
