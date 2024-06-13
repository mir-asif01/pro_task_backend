import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        userEmail: String,
        title: String,
        description: String,
        deadline: String,
        priority: String,
        status: String //to-do,on-going,completed
    },
    { timestamps: true }
)

const Task = mongoose.model("Task", taskSchema)
export default Task