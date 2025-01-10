// old way to import http...
// const http = require("http");
// import filebased module and use it...
// Old way to import...
// const gfName = require("./feature.js");
// New way to import...
import http from "http";
// import without func..
import gfName, {gfName1, gfName2} from "./feature.js";
// import with func...
import { generateLovePercent } from "./feature01.js";
import fs from "fs";
import path from "path";

// Aghr yahan read file krna hau tu osko sync banan pryga..
// const data = fs.readFileSync("./readfile.html")

console.log(gfName);
console.log(gfName1);
console.log(gfName2);

console.log(generateLovePercent());
console.log(path.extname("/home/index.html"));
console.log(path.dirname("/home/random/index.html"));



// Object sy b access krskty hain like this: and aghr gfName m as an obj export hota tu hum osko b as an obj import krk access krskty thy...
import * as obj from "./feature.js";
console.log(obj.gfName2);

// 01---Create Server...
// req , res k bagair ye local host pr ni chlyga...
const server = http.createServer( (req, res)=> {
    console.log(req.method);
    
    // res.end("<h1>Create Server</h1>");
    if(req.url === "/"){
        fs.readFile("./readfile.html", (err, data) => {
            // res.end(data)
            res.end("data")
        })
    }
    else if(req.url === "/about"){
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
    }
    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>");
    }
    else {
        res.end("<h1>Page Not Found....</h1>");
    }
})

// 02---Listen for requests...
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});





// Note:
// Everything in nodejs is module... and there are three types of modules in nodejs..and hr 1 ko meny
// briefly explain nd solve kea hai index.js k andr...

// Async k andr wo wait ni krta or next line mai move krta jta hai.
// lkin sync k andr wo wo wait krta hai jbtk wo data load na o jye
// and by default hmry ps async data hota hai...