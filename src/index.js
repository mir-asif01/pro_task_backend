import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { createNewTask, deleteTask, getAllTasks, getOneTask, updateTask, updateTaskStatus } from "./controllers/task.controller.js"
import { addReview, getAllReviews } from "./controllers/review.controller.js"
const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("server running.....>>>>")
})

async function main() {
    try {
        await mongoose.connect(`${process.env.DB_URI}`)
        console.log("database connected!!");

        // add new task to the database
        app.post("/task", createNewTask)

        // get only all the tasks added by the logged in user 
        app.get("/tasks", getAllTasks)

        // get task by id
        app.get("/tasks/:id", getOneTask)

        //delete one task
        app.delete("/tasks/:id", deleteTask)

        // update single task
        app.patch("/tasks/:id", updateTask)

        // updatet task status
        app.post("/tasks/:id", updateTaskStatus)

        // add new review
        app.post("/add-review", addReview)

        // get all reviews
        app.get("/reviews", getAllReviews)

    } catch (error) {
        if (error) {
            console.log("db connection error")
        }
    }
}

main().catch(err => console.log(err))

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
})