const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

// Custom formatter to ensure `timestamp` is the first key in JSON output
const customJsonFormat = printf(
  ({ level, message, timestamp, ...metadata }) => {
    const logEntry = {
      timestamp, // Ensure timestamp is the first key
      level,
      message,
      ...metadata, // Include any additional metadata
    };
    return JSON.stringify(logEntry);
  }
);

// Create a logger instance
const logger = winston.createLogger({
  level: "info", // Default log level
  format: combine(
    timestamp(), // Add timestamp to logs
    customJsonFormat // Use custom JSON formatter
  ),
  transports: [
    // Log to the console
    new winston.transports.Console(),
    // Log to a file
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

module.exports = logger;
