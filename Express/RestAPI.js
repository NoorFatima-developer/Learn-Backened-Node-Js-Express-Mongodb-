// Ab jesy Meny get METHOD k zareye file beji or POST k zareye jesy hi meny form ko submit keya then, mery pass url mai data agya or 
// body parser k zareye meny data ko web browser pr b access krk dekha deya..


// Lkin API k andr hum data File ki bjye Json Format mai bejty hain...

// 01--Import Express:
const express = require("express");
const router = require("./UserRoutes");

// 02--call express:
const app = express();
const port = 2000;

// Need in step 04...-- Import Path:

// const Path = require("path")

// 06-- Jesy jb hum file get sy post ko bejty thy tu hum body parser ka use krty thy browser pr show krwany klye
// essy hi hum log jb API sy request bejty thy and hum thunder sy request bejry hain json mai tu humy ye use krna pryga...

app.use(express.json());
app.use("/api/v1",router)

// 04-- Get Express:(GET METHOD)
// app.get("/api/v1/userdata", (req, res)  =>{
//     res.json({
//         name: "Noor!",
//         email: "noor@gmail.com",
//         password: "hexed"
//     })
//  });

// AGain step 04.. after getting thunderstorm get url from it and can use it as a file..ku k osk andr json e hoga file mai..like this:

// app.get("/", (req, res)=>{
//     res.sendFile(Path.join(__dirname, "API_index.html")); // it will find index.html file in the same directory as this file and send it to the client...
// })


//  05-- POST METHOD

// But problem is that k aghr mjy bht sari api's ka data handle krna hoga tu kea tb mai app.post wala func bar barlikhogi kea?
// Tu bht sara mess up hojyega tu iss sy bachny klye hum log 1 separate file m iss post waly ko aleda sy handle krlety hain...
// app.post("/api/v1/register", (req, res) =>{
//     const username = req.body.name;
//     const useremail = req.body.email;
//     const userpassword = req.body.password;
    
//     // Validation:  
//     res.json({
//         success: true,
//         // Jb hum mongodb use krygy tu ye data yaha pr bejny ki bjey hum database m store kreayegy...lkin abi ye orac m yhan pr e krwa rhy hain save...
//         // name: username,
//         // email: useremail,
//         // password: userpassword  // This is encrypted password...But in real world it's not secure...
//     })
// })

// 03--Listen:
app.listen(port, ()=>{
    console.log(`Server is working on port: ${port}`);
    
})