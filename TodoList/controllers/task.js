import Task from "../models/task.js";

export const newTask = async (req, res, next) => {

    const {title, description} = req.body

    // task create b 2 tareqo sy krskty hain:
    // const task = new Task({title, description})
    // await task.save();

    // but hum create sy krty hain ku k wo 1 line mai hota hai:

    await Task.create({
        title,
        description, 
        // ye user wala islye dea hai ta k sirf whi user task add krsky jo login hai...
        user:req.user,
    })

    res.status(201).json({
        success: true,
        message: "Task created successfully",
    })
}

export const getTasks = async (req, res, next) => {

    const userid = req.user._id;
    // find method puri array return krta hai islye we will use find instead of findbyid...
    const tasks = await Task.find({user:userid})

    res.status(200).json({
        success: true,
        tasks:tasks,
    })
}
export const updateTasks = async (req, res, next) => {

    const userid = req.user._id;
    // find method puri array return krta hai islye we will use find instead of findbyid...
    const tasks = await Task.find({user:userid})

    res.status(200).json({
        success: true,
        tasks:tasks,
    })
}
export const deleteTasks = async (req, res, next) => {

    const userid = req.user._id;
    // find method puri array return krta hai islye we will use find instead of findbyid...
    const tasks = await Task.find({user:userid})

    res.status(200).json({
        success: true,
        tasks:tasks,
    })
}