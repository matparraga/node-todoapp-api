
const taskService = require("../services/taskService")


const createTaskController = async (req, res) => {
    try {
        const taskData = req.body;
        const newTask = await taskService.createTask(taskData);
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating task', error: error.message });
    }
}



const getTasksController = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
}


const getTaskByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found', error: error.message });
    }
}


const updateTaskController = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedTask = await taskService.updateTask(id, updateData);
        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found', error: error.message });
    }
}





const deleteTaskController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskService.deleteTask(id);
        return res.status(200).json(deletedTask);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found', error: error.message });
    }
}


module.exports = {
    getTasksController,
    createTaskController,
    getTaskByIdController,
    updateTaskController,
    deleteTaskController
}
