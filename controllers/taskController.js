const todoAdapaterModel = require("../models/todoAdapaterModel");
const Task = new todoAdapaterModel(process.env.DATABASE).database;

module.exports.getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.findTask();
    res.status(200).json(tasks);
  } catch (err) {
    console.log("getAllTask-->", err);
  }
};

module.exports.createTask = async (req, res, next) => {
  try {
    const tasks = await Task.createTask({ taskName: req.body.taskName });
    res.status(201).json(tasks);
  } catch (err) {
    console.log("createTask-->", err);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findTaskByName({ taskId: req.params.id });

    res.status(201).json(task);
  } catch (err) {
    console.log("getTaskbyid-->", err);
  }
};
module.exports.updateTaskById = async (req, res, next) => {
  try {
    if ((req.body.status = "completed")) {
      req.body.completed = Date.now();
    }
    const task = await Task.updateTask(
      { taskId: req.params.id },
      { status: req.body.status }
    );
    res.status(201).json(task);
  } catch (err) {
    console.log("updateTask-->", err);
  }
};

module.exports.deleteTaskById = async (req, res, next) => {
  const task = await Task.deleteTask({ taskId: req.params.id });
  res.status(201).json(task);
};
