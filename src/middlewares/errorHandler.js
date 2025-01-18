const logger = require("../../config/logger");

const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error(`Error: ${err.message}`, { error: err });

  // Determine the status code and message
  const status = err.statusCode || 500; // Default to 500 if status is not present
  const message = err.statusCode ? err.message : "Something went wrong"; // Change message only if status is present

  // Send the response
  res.status(status).json({
    error: {
      status,
      message,
    },
  });
};

module.exports = errorHandler;
