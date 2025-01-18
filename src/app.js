const express = require("express");
const morgan = require("morgan");
const config = require("../config/config");
const logger = require("../config/logger");
const registerRoutes = require("./routes/registerRoutes"); // Import route registration
const morganMiddleware = require("../config/morgan");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(express.json());
app.use(morganMiddleware); // Use Morgan middleware

// Register routes
registerRoutes(app);

// Fallback middleware for undefined routes
app.use((req, res, next) => {
  logger.warn(`Undefined route accessed: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Not Found', message: 'The requested resource does not exist.' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
});
