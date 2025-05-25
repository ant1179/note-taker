const router = require("express").Router();
const {
  getAllTasks,
  getTask,
  createOrUpdateTask,
  deleteTask
} = require("../controllers/task.controller");

router.get("/list", getAllTasks);
router.get("/", getTask);
router.post("/", createOrUpdateTask);
router.delete("/", deleteTask);

module.exports = router;