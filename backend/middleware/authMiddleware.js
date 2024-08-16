const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  console.log("Executing requireAuth middleware");
  console.log("Cookies:", req.cookies);
  const token = req.cookies.jwt;
  console.log("Received Token:", token);

  if (token) {
    jwt.verify(token, "weatherfulsecret", (err, decodedToken) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    console.error("No token provided");
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }
};

module.exports = { requireAuth };
