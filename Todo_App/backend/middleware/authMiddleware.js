export const authMiddleware = (req, res, next) => {
  try {
    // id frontend / postman se lo
    const userId = req.headers.userid;

    if (!userId) {
      return res.status(400).json({ message: "UserId required" });
    }

    // req.user me save kar do
    req.user = { id: userId };

    next();
  } catch (err) {
    res.json({ message: "Middleware error", err });
  }
};