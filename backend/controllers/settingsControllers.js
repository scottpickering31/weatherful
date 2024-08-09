const mysql = require("mysql");

// Setup the database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const profileUpdate = async (req, res) => {
  const { value, newValue, email } = req.body;

  if (!value || !newValue || !email) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const validValues = ["name", "email", "password", "timezone"];
  if (!validValues.includes(value)) {
    return res.status(400).json({ error: "Invalid value" });
  }

  // Handle password update securely
  if (value === "password") {
    const hashedPassword = newValue;
    const query = `UPDATE users SET ${value} = ? WHERE email = ?`;

    db.query(query, [hashedPassword, email], (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(200).json({ message: "Settings updated successfully" });
    });
  } else {
    const query = `UPDATE users SET ${value} = ? WHERE email = ?`;

    db.query(query, [newValue, email], (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(200).json({ message: "Settings updated successfully" });
    });
  }
};

module.exports = { profileUpdate };
