// 01---Create Server...
const http = require("http");
const server = http.createServer( ()=> {
    console.log("Server started on port 3000");
})

// 02---Listen for requests...
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

