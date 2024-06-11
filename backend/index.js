const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

dotenv.config({
  path: "../.env",
});
const PORT = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MySQL connected successfully");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful" });
  });
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists in mySqL DB
  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserQuery, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length > 0) {
      return res
        .status(409)
        .json({ error: "This email is aleady in use, please use another" });
    }

    // Insert new user into DB
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, password], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({ message: "User created successfully" });
      }
    });
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
