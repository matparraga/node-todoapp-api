

const taskModel = require("../models/taskModel")

const createTask = async (taskData) => {
    try {
        const newTask = new taskModel(taskData);
        await newTask.save();
        return newTask;
    } catch (error) {
        throw new Error('Error creating task: ' + error.message);
    }
}


const getTasks = async () => {
    try {
        const tasks = await taskModel.find();
        return tasks;
    } catch (error) {
        throw new Error('Error fetching tasks: ' + error.message);
    }
}


const getTaskById = async (id) => {
    try {
        const task = await taskModel.findById(id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    } catch (error) {
        throw new Error('Error fetching task: ' + error.message);
    }
}


const updateTask = async (id, updateData) => {
    try {
        const updatedTask = await taskModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTask) {
            throw new Error('Task not found');
        }
        return updatedTask;
    } catch (error) {
        throw new Error('Error updating task: ' + error.message);
    }
}


const deleteTask = async (id) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            throw new Error('Task not found');
        }
        return deletedTask;
    } catch (error) {
        throw new Error('Error deleting task: ' + error.message);
    }
}


module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask }