const Task = require("../model/Task");

//Get all tasks
const GetTasks = async (req, res) => {
  const tasks = await Task.find();
  if (!tasks)
    return res.status(400).json({ message: "No task found." });
  res.json(tasks);
};

//Create Task
const CreateNewTask = async (req, res) => {
  if (!req.body.name || !req.body.description) {
    console.log(req.body.name)
    return res
      .status(400)
      .json({ message: "Name and Description are required" });
  }
  try {
    const result = await Task.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

//Update Task
const UpdateTask = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Id parameter is required. " });
  }
  const task = await Task.findOne({ _id: req.body.id }).exec();

  if (!task) {
    return res
      .status(204)
      .json({ message: `No Task matches Id ${req.body.id}` });
  }
  if (req.body.name) task.name = req.body.name;
  if (req.body.description) task.description = req.body.description;

  const result = await task.save();
  res.json(result);
};

//Delete Task
const DeleteTask = async (req, res) => {
  if (!req?.body.id) {
    return res.status(400).json({ message: "Task Id is required. " });
  }

  const task = await Task.findOne({ _id: req.body.id }).exec();

  if (!task) {
    return res
      .status(204)
      .json({ message: `No Task matches Id ${req.body.id}` });
  }
  const result = await task.deleteOne({ _id: req.body.id });
  res.json(result);
};
//Get Task
const GetTask = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Task Id is required. " });
  }

  const task = await Task.findOne({ _id: req.params.id }).exec();

  if (!task) {
    return res
      .status(204)
      .json({ message: `No Task matches Id ${req.params.id}` });
  }
  res.json(task);
};
module.exports = {
  GetTasks,
  UpdateTask,
  DeleteTask,
  CreateNewTask,
  GetTask,
};
