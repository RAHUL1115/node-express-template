const morgan = require("morgan");
const logger = require("./logger");

// Custom Morgan tokens
morgan.token("req-body", (req) => JSON.stringify(req.body)); // Log request body
morgan.token("res-body", (req, res) => res.body); // Log response body (if needed)

// Custom Morgan format for JSON logging
const morganJsonFormat = (tokens, req, res) => {
  return JSON.stringify({
    timestamp: new Date().toISOString(),
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    content_length: tokens.res(req, res, "content-length"),
    response_time: tokens["response-time"](req, res) + "ms",
    req_body: tokens["req-body"](req, res), // Include request body
  });
};

// Morgan middleware with JSON format
const morganMiddleware = morgan(morganJsonFormat, {
  stream: {
    write: (message) => {
      const logEntry = JSON.parse(message); // Parse the JSON string
      logger.info("HTTP Request", logEntry); // Log using Winston
    },
  },
});

module.exports = morganMiddleware;
