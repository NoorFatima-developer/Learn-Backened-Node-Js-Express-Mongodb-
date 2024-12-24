// const a = 20
// console.log(a/10);

// Ab ye backend klye kam ni kryga ku k backend m document.getElementById ya iss trhan ki chezain ni hoti 
// ye specifically front end klye hoti hai browser pr work krygi but node js pr jb m run krogi terminal pr tu gives me error
// ku k windows object specifically front end klye hai na k backend klye...
// But index.js wali file or fron end m jo index.js file hoti hai wo same e hoti hai...
// console.log(window);


// ==============Learn Node js Now:==========================

// Node js k andr me function banao, ya object banano, ya variable banao hr chez module hai node js k andr...

// Ab Modules different types k hoty hain:

// i---File based module(Transfer from one file to another)
// ii--Build In
// iii--Third Party...


// =====01----===============================File Based=========================(Transfers from one file to another)
// File based module(Example 01)

// const b = 8;
// const c = 80;
// console.log(c);

// Example 02:

// const d = {
//     average: (a, b) => {
//         console.log((a + b) / 2);
         
//     },
//     multiply: (a, b) => {
//         console.log((a * b));
         
//     },
//     squareRoot: (a) => {
//         console.log(Math.sqrt(a));
         
//     },
//     percent: (a,b) => {
//         console.log(((a / b) * 100));
         
//     }
// }
// module.exports = b;
// module.exports = d;
// export default d;



// =====02================================ Build In(Jo pehly sy e bny hoty hain modules hamara kam bs onhy use krna hota hai...)========================================================

// Build In modules hmaray ps wo hoty hain jiny download nahi krna prta...

// ==========Read Files =================================
//////// Example 01:(async function)=>Mjy execute m jitna mrzi time lgy lkin tum apny kam ko meri waja sy na roko ..

// const fs = require("fs");

// fs.readFile("./sample.txt", "utf-8", (err, data)=> {
//     if(err) {
//         throw err;
//     } else {
//         // Ya tu mai data ko String m convert krdo byusing toString() Method ya phr oper top mai "utf-8" likhdon
//         // Aghr ye ni krogi tu wo mjt data buffer ki form m return kryga...
//         console.log(data.toString());
//     }
// })


// console.log("Hi I am at first");


// Ab aghr mai console pr dekhogi tu ye "Hi I m at first" pehly print hoa hoga halank ye bdmai likha hai..
// Iski Reason ye hai k ye jo oper meny readfile wala callback fun banaya hai ye asyn hai 
// or 1 async func wo hota hai k aghr osko kam krny m ya process mai jitna mrzi time lgy lkin wo agly ko kehta hai tu mera wait na kr
// or tu tu bhai execute o ja ..That's why mery pss ye pehly execite hoa hai...


//////// Example 01:(synchronous function)=>Mjy execute m beshk sari zindgi lg jye lkin tmny tbtk next func ko execite ni krna jbtk m execute na o jao...

// const fs = require("fs");

// const a = fs.readFileSync("./sample.txt", "utf-8")

// console.log(a.toString()) // This will print the content of the file;
// console.log("Hi I am at first");


// =========Write File==============================

// Example 02:(asynchronous function)

// const fs = require("fs");
// const a = "This is a new content"
// fs.writeFile("./writefile.txt", a , () => {
//     console.log("written");
// })

// console.log("I am first");


// Example 02:(Synchronous function)

// const fs = require("fs");
// const a = "This is my new content"
// fs.writeFileSync("./writefile.txt", a )
// const data = fs.readFileSync("./writefile.txt", "utf-8")

// console.log(data) // This will print the content of the file;
// console.log("I am at last now...");


// .....................SOME MORE BUILD IN MODULES ARE AS LIKE "PATH" & "OS" etc...................................

// ============================Some More fun with "Path"============================//

// Import path and then I will use all paths......
const path = require("path");

const extension_name = path.extname("/node/index.js")
const basename = path.basename("D:/Backened(Node JS, Express, Mongo Db)/Nodejs>")
const directory_name = path.dirname("D:/Backened(Node JS, Express, Mongo Db)/Nodejs>")
const path_join = path.join("D:/Backened(Node JS, Express, Mongo Db)/Nodejs>" + "/6pp")

console.log(extension_name);        // .js ==>File ki extension bata daiga..
console.log(basename);              // Nodejs ==> Currently jis folder m hai oss folder ka nam bata daiga...
console.log(directory_name);         // D:/Backened(Node JS, Express, Mongo Db)/Nodejs/ ==> Pura path bata daiga and jis directory k andr hai..
console.log(path_join);             // Jo path meny dea hai osk sath "/6pp" ko b add krdyga...


//===========================Some More Fun with "os"===================================//

// import os and then will use it further...
const os = require("os");

console.log(os.freemem());      //freemem jitni bachi hai wo return krdyga...
console.log(os.hostname());     //hostname ka nam print krdyga jesy mai khud host hon tu "Noor" print krdyga..
console.log(os.totalmem());     //totalmem dedyga...



//===========================03 Third Party Modules===================================//

// Simple words mai third party modules wo hoty hain k kisi or ny code likha hai or hum osko download krk apny project mai use kr rhy hain
// osko hum log third-part modules kehty hain...

// Ab meny "npm install pokemon" => ye command use krk meny third party module "pokemon" download krlea hai and ye pokemon ka version mery package.json file 
// k andr add hogya hai....

// Ab mai isko use krskit o import krk like this:

// meny pokemon k sath ./ islye nahi lgya k yahan pr node_modules waly folder ki bt hori hai or wo already node folder k andr hai
// aghr Node folder k andr ki bt hoti kahi tu mai ./file_name/packagename use krskit thie...
// const pokemon = require("pokemon")
// console.log(pokemon.random());              //ab ye kisi b random pokemon ko print krdyga...
// console.log(pokemon.all());                 // ab ye sary pokemon ki list ko return krdygaa...


// ==================How can create Server for backened========================...

// const http = require("http");
// http.createServer((req, res, next)=>{
        // req.url  sy hum request get krskty hain
        //res       sy hum response get krskty hain
        // next     ab next abi hum use ni krygy ye advanced chezo mai jahan pr hmry ps bht sari files or bht sary routes wagaira hon tb hum isko use krty hain...

// })


// Tu abi klye smj lety hain k hamary ps bs 2 chezain hai 1 req, 2sra res...

const http = require("http");
// Read index1.html file:
const fs = require("fs")

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index1.html", "utf-8")


// It will return the directory name as well as file_name ...
console.log(__dirname);
console.log(__filename);



const server = http.createServer((req, res)=>{

    res.setHeader("Content-Type", "text/html"); // Set response type as HTML

        // ye line end mai krni hai ku k response end m ata hai...

        if(req.url === "/"){
            return res.end(home)
        }

        if(req.url === "/about"){
        // Extract only the "ABOUT SECTION" from the HTML file...Mai html andr krny ki bjye about klye aleda sy b file banan skti thie, and wo zda convinient...
        const aboutSection = home.split('<div class="about">')[1].split("</div>")[0];
        return res.end(`<div class="about">${aboutSection}</div>`);
        }
        
        else if(req.url === "/contact"){
        const contactSection = home.split('<div class="contact">')[1].split("</div>")[0];
        return res.end(`<div class="about">${contactSection}</div>`);
        }
        else if(req.url === "/contact"){
            return res.end("<h1>CONTACT PAGE</h1>")
        }
        else{
            res.statusCode = 404;
            return res.end("<h1> 404 Page Not Found</h1>")
        }

});


// Listen to port and hostname;
server.listen(PORT, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
});