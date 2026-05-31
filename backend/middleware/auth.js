const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const { token } = req.headers;
  if (!token)
    return res.json({ success: false, message: "Not Authorized. Please log in." });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
