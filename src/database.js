const mongoose = require("mongoose");

const { user, password, database } = require("./config");

mongoose.connect(
  `mongodb+srv://${user}:${password}@clusterxis.6owt6.mongodb.net/${database}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = () => mongoose;