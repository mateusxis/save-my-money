const mongoose = require("mongoose");

const { user, password, database } = require("./config");

const mongoURI = `mongodb://${user}:${password}@clusterxis.6owt6.mongodb.net/${database}?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
