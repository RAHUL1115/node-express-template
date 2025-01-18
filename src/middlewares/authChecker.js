const logger = require("../../config/logger");

const authMiddleware = (req, res, next) => {
  logger.info("Auth Middleware: Authenticating request...", {
    path: req.path,
    method: req.method,
  });

  // Simulate authentication logic
  const isAuthenticated = true; // Replace with actual authentication logic

  if (isAuthenticated) {
    next(); // User is authenticated, proceed to the next middleware/route
  } else {
    logger.warn("Auth Middleware: Unauthorized request", {
      path: req.path,
      method: req.method,
    });
    res.status(401).json({ error: "Unauthorized" }); // User is not authenticated
  }
};

module.exports = authMiddleware;
