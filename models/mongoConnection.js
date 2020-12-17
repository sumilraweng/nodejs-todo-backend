const mongoose = require("mongoose");

module.exports.connect = mongoose
  .createConnection(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .on("open", function (ref) {
    connected = true;
    console.log("open connection to mongo server.");
  })
  .on("connected", function (ref) {
    connected = true;
    console.log("connected to mongo server.");
  })
  .on("error", function (err) {
    connected = false;
    console.log("error connection to mongo server!");
    console.log(err);
  });
