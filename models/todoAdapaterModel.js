const todoMongo = require("./todoMongoCrud");

class todoAdapaterModel {
  constructor(database) {
    switch (database) {
      case "mongodb": {
        this.database = todoMongo;
        // console.log(todoMongo);
        break;
      }
      default: {
        console.log("error");
      }
    }
  }
}

module.exports = todoAdapaterModel;
