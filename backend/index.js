const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "../.env",
});

const app = express();

// Middleware for parsing cookies - should come first
app.use(cookieParser());

// Middleware for parsing JSON request bodies - should come before routes
app.use(express.json());

// Middleware for CORS - allows cross-origin requests and credentials
app.use(
  cors({
    origin: "https://xsjs2s-5173.csb.app", // Allow the specific origin
    credentials: true, // Allow cookies to be sent and received
  })
);

// Routes - defined after middleware
app.use("/api", require("./routes/authRoutes")); // Auth routes
app.use("/api", require("./routes/settingsRoutes")); // Settings routes

// Connect to the database
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
