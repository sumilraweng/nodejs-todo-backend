const express = require("express");
const {
  verifyPostRequest,
  getTaskById,
  getAllTask,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/tasks").get(getAllTask).post(verifyPostRequest, createTask);
router
  .route("/tasks/:id")
  .get(getTaskById)
  .put(verifyPostRequest, updateTaskById)
  .delete(deleteTaskById);

module.exports = router;
