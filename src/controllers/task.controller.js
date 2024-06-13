import Task from "../models/task.model.js";

const createNewTask = async (req, res) => {
    try {
        const task = req.body
        const result = await Task.create(task)
        res.send(result)
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

// get only all the tasks added by the logged in user 
const getAllTasks = async (req, res) => {
    try {
        const email = req.query?.email
        const allTasks = await Task.find({ userEmail: email })
        res.send(allTasks)
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

// // get all tasks according to its status -->>to-do,on-going,completed
// const getAllTasksByStatus = async () => {
//     try {
//         const status = 
//     } catch (error) {
//         if (error) {
//             console.log(error);
//         }
//     }
// }

export { createNewTask, getAllTasks }