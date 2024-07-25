const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const updateAvatars = (req, res) => {
  const { avatarIconData } = req.body;
  const query = "UPDATE users SET avatar = ? WHERE name = ?";
  db.query(query, [avatarIconData], (err, results) => {
    if (err) {
      console.error("Error updating avatar:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json({ message: "Avatar updated successfully" });
  });
};

module.exports = { updateAvatars };
