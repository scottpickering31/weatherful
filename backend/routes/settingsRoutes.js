const express = require("express");
const router = express.Router();
const { profileUpdate } = require("../controllers/profileUpdateControllers");
const {
  searchHistory,
  getSearchHistory,
} = require("../controllers/searchHistoryController");
const { requireAuth } = require("../middleware/authMiddleware");

router.use(requireAuth);

// Private routes (Auth required)
router.patch("/update-settings", profileUpdate);
router.post("/search-history", searchHistory);
router.post("/get-search-history", getSearchHistory);

module.exports = router;
