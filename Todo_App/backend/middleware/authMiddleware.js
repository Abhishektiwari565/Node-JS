import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // token check
    if (!token) {
      return res.status(401).json({ message: "No token, access denied" });
    }

    // verify token
    const decoded = jwt.verify(token, "JWT_SECRET");

    // user info save
    req.user = decoded;

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};