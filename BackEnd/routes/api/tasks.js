const express = require("express");
const router = express();
const taskController = require("../../controller/taskController");

router
  .route("/")
  .get(taskController.GetTasks)
  .post(taskController.CreateNewTask)
  .put(taskController.UpdateTask)
  .delete(taskController.DeleteTask);

router.route("/:id").get(taskController.GetTask);

module.exports = router;
