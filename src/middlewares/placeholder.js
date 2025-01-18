const logger = require("../../config/logger");

const placeHolderMiddleware = (req, res, next) => {
  logger.info("Example Middleware: Request received");
  next(); // Call next() to pass control to the next middleware or route handler
};

module.exports = placeHolderMiddleware;
