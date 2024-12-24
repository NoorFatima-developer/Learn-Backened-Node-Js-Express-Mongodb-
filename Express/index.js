// First of all why we need Express???

// Express ki hmy need islye pri k jo kam hum nodejs sy server create krny mai 100 lino sy kr rhy thy wo yahan pr 20lines mai hoga
// Islye we need to use Express..

// EXPRESS K andr bs 3 kam krny hain and 4 5 lines k andr hi server start hojyega....


// 01--Import Express:
const express = require("express");
// 02--call express:
 const app = express();
 const port = 3000;

// 04-- Get Express:
app.get("/", r=(req, res)=>{
    res.send("HOME PAGE");
 });
app.get("/about", r=(req, res)=>{
    res.send("ABOUT PAGE");
 });
app.get("/contact", r=(req, res)=>{
    res.send("CONTACT PAGE");
 });

// 03--Listen:
app.listen(port, ()=>{
    console.log(`Server is working on port: ${port}`);
    
})



// Ab get Method ko smjny klye hmu CRUD METHOD SMJNA HOGA PEHLY..
// C->CREATE, R->READ, U->UPDATE, D->DELETE....


// Ab aty hain get ki trf ...
// GET -> MEANS READ, POST -> MEANS CREATE, PUT -> UPDATE, DELETE-> DELETE..
