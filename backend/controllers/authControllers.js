const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Asynchronous signUp function
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, results) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({
            error:
              "Email already exists. Please use another, or login instead.",
          });
        }
        console.error("Error inserting user:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      const user_id = results.user_id;
      const user = { name, email, user_id };
      const token = createToken(user.user_id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
      res.status(201).json({
        message:
          "User created successfully, Please log in using your credentials!",
        user,
      });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Asynchronous login function
const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("Error logging in:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  });
};

module.exports = { signUp, login };
