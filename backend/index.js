const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "../.env",
});

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://xsjs2s-5173.csb.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/settingsRoutes"));

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the MySQL database");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
