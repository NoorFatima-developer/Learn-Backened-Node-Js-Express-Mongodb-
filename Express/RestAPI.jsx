// Ab jesy Meny get METHOD k zareye file beji or POST k zareye jesy hi meny form ko submit keya then, mery pass url mai data agya or 
// body parser k zareye meny data ko web browser pr b access krk dekha deya..


// Lkin API k andr hum data File ki bjye Json Format mai bejty hain...

// 01--Import Express:
const express = require("express");
// Path ko b import krna pryga...
const Path = require("path")
// import body-parser(but must instakk before impor) =>npm i body-parser
// Body parser krny ka mqsd ye hai k m form submit hony pr jo data POST req k zareye url k andr dekh parahi hon osko m web browser pr b dekh skon...
const bodyParser = require("body-parser")

// 02--call express:
const app = express();
const port = 5000;
// Lkin jbtk body parser ko use ni krygy wo kam ni kryga...so use..
app.use(bodyParser.urlencoded({extended: false}));
 

// 04-- Get Express:(GET METHOD)
app.get("/", (req, res)=>{
// res.send("HOME PAGE");
// Mer ps index.html file hai and meny wo file bejni hai home page ki bjeye tu i will use this;
    res.sendFile(Path.join(__dirname, "/index.html"));
 });


app.post("/api/v1/userdata", (req, res)=> {
   
    res.json({
        name: "Noor!",
        email: "noor@gmail.com",
        password: "hexed"
    })
    
})

// 03--Listen:
app.listen(port, ()=>{
    console.log(`Server is working on port: ${port}`);
    
})