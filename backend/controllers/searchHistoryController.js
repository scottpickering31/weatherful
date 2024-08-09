const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const searchHistory = (req, res) => {
  const { user_id, location, temperature } = req.body;
  const sql =
    "INSERT INTO search_history (user_id, location, temperature) VALUES (?, ?, ?)";
  db.query(sql, [user_id, location, temperature], (err, result) => {
    if (err) {
      console.error("Error inserting search history:", err);
      return res.status(500).send("Error adding search history");
    }
    res
      .status(201)
      .send({ search_id: result.insertId, user_id, location, temperature });
  });
};

module.exports = { searchHistory };
