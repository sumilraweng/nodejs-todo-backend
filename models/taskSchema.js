const mongoose = require("mongoose");

module.exports.TaskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    unique: true,
    required: true,
    sparse: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed"],
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  completed: {
    type: Date,
    validation: function () {
      return this.status == "completed";
    },
  },
});
