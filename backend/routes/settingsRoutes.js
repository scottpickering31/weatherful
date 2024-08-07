const express = require("express");
const router = express.Router();
const { profileUpdate } = require("../controllers/profileUpdateControllers");
const {
  searchHistory,
  getSearchHistory,
} = require("../controllers/searchHistoryController");

// PATCH ROUTES
router.patch("/update-settings", profileUpdate);

// POST ROUTES

router.post("/search-history", searchHistory);
router.post("/get-search-history", getSearchHistory);

// GET ROUTES

module.exports = router;
