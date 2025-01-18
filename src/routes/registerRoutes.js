const routes = require("./routes");
const authMiddleware = require("../middlewares/authChecker");

const registerRoutes = (app) => {
  routes.forEach((route) => {
    const { method, path, handler, middlewares = [], secure = true } = route;

    // Add auth middleware if the route is secure
    if (secure) {
      middlewares.unshift(authMiddleware); // Add auth middleware at the beginning
    }

    // Register the route with middlewares
    app[method.toLowerCase()](path, ...middlewares, handler);
  });
};

module.exports = registerRoutes;
