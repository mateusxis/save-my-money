if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE, PORT } = process.env;

module.exports = {
  database: {},
  port: PORT || 3000,
};
