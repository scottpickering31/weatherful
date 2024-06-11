// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// const connection = mysql.createConnection({
//   host: "sql8.freesqldatabase.com",
//   user: "sql8710848",
//   password: "XSkSVwAsMV",
//   database: "sql8710848",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database: ", err);
//     return;
//   }
//   console.log("Connected to MySQL database");
// });

// app.get("/users", (req, res) => {
//   connection.query("SELECT * FROM users", (err, results) => {
//     if (err) {
//       console.error("Error executing MySQL query: ", err);
//       res.status(500).json({ error: "Error fetching data from database" });
//       return;
//     }
//     res.json(results);
//   });
// });

// app.post("/signup", (req, res) => {
//   const { name, email, date, password } = req.body;

//   // Check if user already exists
//   const query = "SELECT * FROM users WHERE email = ?";
//   connection.query(query, [email], (err, results) => {
//     if (err) {
//       console.error("Error executing MySQL query: ", err);
//       res.status(500).json({ error: "Error checking for existing user" });
//       return;
//     }

//     if (results.length > 0) {
//       // User already exists
//       res.status(400).json({ error: "User already exists" });
//     } else {
//       // Insert new user
//       const insertQuery =
//         "INSERT INTO users (name, email, date, password) VALUES (?, ?, ?, ?)";
//       connection.query(
//         insertQuery,
//         [name, email, date, password],
//         (err, results) => {
//           if (err) {
//             console.error("Error executing MySQL query: ", err);
//             res.status(500).json({ error: "Error inserting new user" });
//             return;
//           }
//           res.status(201).json({ message: "User created successfully" });
//         }
//       );
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
