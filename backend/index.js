const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
<<<<<<< HEAD

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(cors());
app.use(express.json());

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

const db = mysql.createConnection({
=======

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
>>>>>>> fea8c1d8acf36e6870957af78e087071fd1f726d
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

<<<<<<< HEAD
db.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the MySQL database");
=======
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
  connection.release();
});

// Routes
// Example route: GET all users
app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
>>>>>>> fea8c1d8acf36e6870957af78e087071fd1f726d
});

// Example route: POST new user
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
<<<<<<< HEAD
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "User created successfully" });
  });
})

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
  pool.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ message: "User created successfully" });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
>>>>>>> fea8c1d8acf36e6870957af78e087071fd1f726d
});
