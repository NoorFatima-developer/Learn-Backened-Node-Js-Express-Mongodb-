// 01---Create Server...
const http = require("http");
// req , res k bagair ye local host pr ni chlyga...
const server = http.createServer( (req, res)=> {
    // res.end("<h1>Create Server</h1>");
    if(req.url === "/"){
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url === "/about"){
        res.end("<h1>About Page</h1>");
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