const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const taskRoutes = require("./routes/task.js")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", taskRoutes)

const PORT = process.env.PORT || 9000


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error))


app.get("/", (req, res) => {
    res.send("Welcome to my api")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


