const express = require("express")
//cuando se usa require no se usa el .js
const {
    getTasksController,
    createTaskController,
    updateTaskController,
    deleteTaskController,
    getTaskByIdController
} = require("../controllers/taskController")

const router = express.Router()


router.get("/tasks", getTasksController)

router.get("/tasks", getTaskByIdController)

router.post("/tasks", createTaskController)

router.put("/tasks/:id", updateTaskController)

//por esto no se enviaba
router.delete("/tasks/:id", deleteTaskController)







module.exports = router



