const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, signUp, login } = require("../controllers/authControllers");

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

router.get("/", test);
router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
