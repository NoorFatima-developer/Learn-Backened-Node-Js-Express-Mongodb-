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


// =====01----File Based======
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



// =====02 Build In======

// Build In modules hmaray ps wo hoty hain jiny download nahi krna prta...

// Example 01:(async function)=>Mjy execute m jitna mrzi time lgy lkin tum apny kam ko meri waja sy na roko ..

const fs = require("fs");

fs.readFile("./sample.txt", "utf-8", (err, data)=> {
    if(err) {
        throw err;
    } else {
        // Ya tu mai data ko String m convert krdo byusing toString() Method ya phr oper top mai "utf-8" likhdon
        // Aghr ye ni krogi tu wo mjt data buffer ki form m return kryga...
        console.log(data.toString());
    }
})


console.log("Hi I am at first");


// Ab aghr mai console pr dekhogi tu ye "Hi I m at first" pehly print hoa hoga halank ye bdmai likha hai..
// Iski Reason ye hai k ye jo oper meny readfile wala callback fun banaya hai ye asyn hai 
// or 1 async func wo hota hai k aghr osko kam krny m ya process mai jitna mrzi time lgy lkin wo agly ko kehta hai tu mera wait na kr
// or tu tu bhai execute o ja ..That's why mery pss ye pehly execite hoa hai...


// Example 01:(synchronous function)=>Mjy execute m beshk sari zindgi lg jye lkin tmny tbtk next func ko execite ni krna jbtk m execute na o jao...
