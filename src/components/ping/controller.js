const pingService = require("./service");
const logger = require("../../../config/logger");
const {Gone } = require("throw.js");

const get = async (req, res, next) => {
  try {
    const data = await pingService.get();
    // throw new Gone("Gone"); // to throw custom error
    throw err;

    res.status(200).json(data);
  } catch (error) {
    logger.error(`[ping] Error in get: ${error.message}`);
    next(error);
  }
};

module.exports = {
  get,
};
