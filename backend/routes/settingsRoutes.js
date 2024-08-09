const express = require("express");
const router = express.Router();
const { profileUpdate } = require("../controllers/profileUpdateControllers");
const { searchHistory } = require("../controllers/searchHistoryController");

// PATCH ROUTES
router.patch("/update-settings", profileUpdate);

// POST ROUTES

router.post("/search-history", searchHistory);

module.exports = router;
