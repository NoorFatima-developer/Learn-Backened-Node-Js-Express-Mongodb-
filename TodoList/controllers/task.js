import Task from "../routes/task.js";

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