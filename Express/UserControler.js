// Tu I will export the callback func of POst here inside exports.registerUser...

// Isk andr get post banaya hai..

const Path = require("path")

// Ye post handle kr rha hai...
const registerUser = (req, res) => {
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
    
    // Validation:  
    res.json({
        success: true,
    })
}

// Ye get handle kr rha hai...
const getUser = (req, res) => {
    res.sendFile(Path.join(__dirname, "API_index.html"))
}


module.exports = {
    registerUser,
    getUser,
  };
  