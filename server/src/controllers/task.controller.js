const {
  createOrUpdateTask,
  fetchTaskList,
  fetchTaskById,
  deleteTaskById
} = require("../database/queries/task.queries");
const logger = require("../config/logger.config");
const i18n = require("i18n");

exports.createOrUpdateTask = async (req, res) => {
	try {
		const { title } = req.body;

		const task = await createOrUpdateTask(req.body);
		logger.info("Create or update task " + title);

		return res.status(201).json(task);
	} catch (err) {
		logger.error(err.message);
		return res.status(400).json(i18n.__("msg_generic_error"));
	}
};

exports.getAllTasks = async (req, res) => {
	try {
		const taskList = await fetchTaskList();
		logger.info("Found " + taskList.length + " tasks");
		return res.status(200).json(taskList);
	} catch (err) {
		logger.error(err.message);
		return res.status(400).json(i18n.__("msg_generic_error"));
	}
};

exports.getTask = async (req, res) => {
	try {
		const { taskId } = req.query;

		const task = await fetchTaskById(taskId);
		logger.info("Found task " + task.title);
		return res.status(200).json(task);
	} catch (err) {
		logger.error(err.message);
		return res.status(400).json(i18n.__("msg_generic_error"));
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const { taskId } = req.query;

		const task = await deleteTaskById(taskId);
		logger.info("Deleted task " + taskId);
		return res.status(200).json(task);
	} catch (err) {
		logger.error(err.message);
		return res.status(400).json(i18n.__("msg_generic_error"));
	}
};