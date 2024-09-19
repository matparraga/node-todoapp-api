const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    done: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Task", taskSchema)


