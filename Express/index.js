// First of all why we need Express???

// Express ki hmy need islye pri k jo kam hum nodejs sy server create krny mai 100 lino sy kr rhy thy wo yahan pr 20lines mai hoga
// Islye we need to use Express..

// EXPRESS K andr bs 3 kam krny hain and 4 5 lines k andr hi server start hojyega....


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


// app.get("/about", r=(req, res)=>{
//     res.send("ABOUT PAGE");
//  });
// app.get("/contact", r=(req, res)=>{
//     res.send("CONTACT PAGE");
// });


// Abi ye sary crud operations GET, POST, PUT, DELETE hum log sirf home pr apply krygy...

//POST METHOD USE:(Jesy e index.html wali file send kryga ye osmai jo b data hum dalygy wo url mai show hojyega...)
app.post("/api/v1/login", (req, res)=> {
    // ab let say meny 1 form bra hai osmai meny noor pass kea hai ab mai nichy wlai line sy noor ko access krskti hon...

    // const username = req.body.name
    // console.log(username);
    // console.log("name");
res.send(`<h1>DONE Mr. ${req.body.name}</h1> <h2>${req.body.email}</h2> <h3>${req.body.password}`)
    console.log(req.body);      //ab console m mai form mai brha hoa data dekhs kti hon..
    
    
})


// 03--Listen:
app.listen(port, ()=>{
    console.log(`Server is working on port: ${port}`);
    
})



// Ab get Method ko smjny klye hmu CRUD METHOD SMJNA HOGA PEHLY..
// C->CREATE, R->READ, U->UPDATE, D->DELETE....


// Ab aty hain get ki trf ...
// GET -> MEANS READ, POST -> MEANS CREATE, PUT -> UPDATE, DELETE-> DELETE..
