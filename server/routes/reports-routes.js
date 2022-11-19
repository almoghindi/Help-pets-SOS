const express = require("express");

const reportController = require("../controllers/reports-controllers");
const router = express.Router();

router.post("/createReport", reportController.createReport);

module.exports = router;
