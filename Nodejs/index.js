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

const d = {
    average: (a, b) => {
        console.log((a + b) / 2);
         
    },
    multiply: (a, b) => {
        console.log((a * b));
         
    },
    squareRoot: (a) => {
        console.log(Math.sqrt(a));
         
    },
    percent: (a,b) => {
        console.log(((a / b) * 100));
         
    }
}
// module.exports = b;
// module.exports = d;
export default d;



// =====02 Build In======
