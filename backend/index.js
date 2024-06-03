const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8710848",
  password: "XSkSVwAsMV",
  database: "sql8710848",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users WHERE age = 30", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      res.status(500).json({ error: "Error fetching data from database" });
      return;
    }
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
