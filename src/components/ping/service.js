const logger = require("../../../config/logger");

const get = async () => {
  try {
    // Simulate fetching data from a database or external API
    return { message: "Hello, World!" };
  } catch (error) {
    logger.error(`Error in getExampleData: ${error.message}`);
    throw error;
  }
};

module.exports = {
  get,
};
