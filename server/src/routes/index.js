const router = require("express").Router();
const taskRoutes = require("./task.routes");
const pingRoutes = require("./ping.routes");

router.use("/api/task", taskRoutes);
router.use("/api/ping", pingRoutes);

module.exports = router;