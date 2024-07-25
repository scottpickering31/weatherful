const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
} = require("../controllers/authControllers");
const {
  updateAvatars
} = require("../controllers/avatarControllers");

// POST ROUTES
router.post("/signup", signUp);
router.post("/login", login);

// PATCH ROUTES
router.patch("/update-avatar", updateAvatars);

module.exports = router;
