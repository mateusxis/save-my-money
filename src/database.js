const mongoose = require("mongoose");

const { database } = require("./config");

const mongoURI = `mongodb+srv://${database.username}:${database.password}@clusterxis.6owt6.mongodb.net/${database.database}?retryWrites=true&w=majority`;

module.exports = () =>
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
