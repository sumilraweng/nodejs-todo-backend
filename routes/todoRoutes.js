const express = require("express");
const {
  getTaskById,
  getAllTask,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");
const {
  verifyPostRequest,
  verifyUpdateRequest,
} = require("../middelware/todoMiddelware");
const router = express.Router();

router.route("/tasks").get(getAllTask).post(verifyPostRequest, createTask);
router
  .route("/tasks/:id")
  .get(getTaskById)
  .put(verifyUpdateRequest, updateTaskById)
  .delete(deleteTaskById);

module.exports = router;
