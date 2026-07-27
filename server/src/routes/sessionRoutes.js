const express = require("express");
const router = express.Router();

const sessionController = require("../controllers/sessionController");

// START SESSION
router.post("/start", sessionController.startSession);

router.post("/activity", sessionController.updateActivity);
module.exports = router;