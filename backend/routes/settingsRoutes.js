const express = require("express");
const router = express.Router();
const { profileUpdate } = require("../controllers/settingsControllers");

// PATCH ROUTES
router.patch("/update-settings", profileUpdate);

module.exports = router;
