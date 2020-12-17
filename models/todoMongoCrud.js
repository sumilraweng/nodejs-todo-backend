const { connect } = require("./mongoConnection");
const { TaskSchema } = require("./taskSchema");
const uniqid = require("uniqid");

//header-->
// const MyModel = (connection, modelName) => {
//   return
// };
const Task = connect.model("todo", TaskSchema);

// create model(return model) -->connect to mongo(return connection) -->crud operation

const create = async (obj) => {
  try {
    obj.taskId = uniqid();
    const task = new Task(obj);
    const data = await task.save();
  } catch (error) {
    console.error("create Error-->", error);
  }
};
const find = async () => {
  try {
    const task = await Task.find()
      .sort({ status: 1, created: 1 })
      .select("taskName status taskId created completed -_id");
    return task;
  } catch (error) {
    console.error("find Error-->", error);
  }
};

const findById = async (obj) => {
  try {
    const task = await Task.findOne(obj)
      .sort({ status: 1, created: 1 })
      .select(" taskName status taskId created completed -_id");
    return task;
  } catch (error) {
    console.error();
  }
};

const updateById = async (findObj, updateObj) => {
  try {
    await Task.findOneAndUpdate(findObj, updateObj, { runValidators: true });
    const task = await Task.findOne(findObj)
      .sort({ status: 1, created: 1 })
      .select(" taskName status taskId created completed -_id");
    return task;
  } catch (err) {
    console.error("update-->", err);
  }
};

const deleteById = async (obj) => {
  try {
    const task = await Task.findOneAndRemove(obj).select(
      "taskName status taskId created completed -_id"
    );
    return task;
  } catch (err) {
    console.error("deleted-->", err);
  }
};

module.exports = {
  createTask: create,
  findTask: find,
  findTaskByName: findById,
  updateTask: updateById,
  deleteTask: deleteById,
};
