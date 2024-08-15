const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("JWT Token from Cookie:", req.cookies.jwt);

  if (token) {
    jwt.verify(token, "weatherfulsecret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      } else {
        console.log(decodedToken);
        req.user = decodedToken;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }
};

module.exports = { requireAuth };
