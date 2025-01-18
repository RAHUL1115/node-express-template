const pingController = require("../components/ping/controller");
const placeHolderMiddleware = require("../middlewares/placeholder");


module.exports = [
  {
    method: "GET",
    path: "/api/v1/ping",
    handler: pingController.get,
    secure: false, // Use auth middleware (default is true)
    middlewares: [placeHolderMiddleware], // Array of middlewares (optional)
  },
  {
    method: "GET",
    path: "/api/v1/ping-secure",
    handler: pingController.get,
    secure: true, // Use auth middleware (default is true)
  },
];
