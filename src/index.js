import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { createNewTask, getAllTasks } from "./controllers/task.controller.js"
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
        app.get("/task", getAllTasks)

    } catch (error) {
        if (error) {
            console.log("db connection error");
        }
    }
}

main().catch(err => console.log(err))

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
})