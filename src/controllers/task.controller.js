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

const getOneTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findById(taskId)
        res.send(task)

    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const result = await Task.findByIdAndDelete(taskId)
        res.send(result)

    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const updatedTask = req.body
        const result = await Task.findByIdAndUpdate(
            taskId,
            {
                $set: {
                    title: updatedTask?.title,
                    description: updatedTask?.description
                }
            },
            {
                new: true
            }
        )
        res.send(result)

    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}

// const updateTaskStatusCompleted = async (req, res) => {
//     try {
//         const taskId = req.params.id
//         await Task.findByIdAndUpdate(
//             taskId,
//             {
//                 $set: {
//                     status: "completed"
//                 }
//             },
//             {
//                 new: true
//             }
//         )
//     } catch (error) {
//         if (error) {
//             console.log(error);
//         }
//     }
// }
export { createNewTask, getAllTasks, getOneTask, deleteTask, updateTask }