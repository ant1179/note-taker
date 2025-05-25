const { Task } = require("../models");

exports.fetchTaskById = async (id) => {
	return Task.findById(id).exec();
};

exports.fetchTaskList = async () => {
  return Task.find()
    .sort({ createdAt: -1 })
    .select("-__v")
    .exec();
};

exports.createOrUpdateTask = async (taskData) => {
  const { _id, ...data } = taskData;
  if (_id) {
    return Task.findByIdAndUpdate(
      _id,
      data,
      { new: true, runValidators: true }
    ).exec();
  }
  return Task.create(data);
}

exports.deleteTaskById = async (id) => {
  return Task.findByIdAndDelete(id).exec();
}