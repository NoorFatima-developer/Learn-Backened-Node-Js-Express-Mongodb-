import express from 'express';
// ye public m jo html thie mnz sttaic file send krny klye path use kea hau..
import path from 'path';
// 01-- create server...
const app = express();
// mongoose ko import krna hai node js ko mongodb k stah connect krny klye...
import mongoose from 'mongoose';
// import cookie-parser because its also a middleware:
import CookieParser from 'cookie-parser';

// import jwt token...
import jwt from "jsonwebtoken";




// =============================DB KA KAM====================

// Connect with database:
mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: 'backend',
    writeConcern: { w: "majority" }
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Database connection error", err);
})

// Create Schema:
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

// NOW I WILL CREATE MODEL OR CAN SAY COLLECTION..
const user = mongoose.model("user", userSchema);

// Ab mai data bejogi...
app.get("/add", async(req, res) => {

    // Ab mai module ko use krlogi..and create jismai mera obj hoga...
    // pehly data add hoga and then user mai 'Nice' chala jyega...
    await user.create({
        name: "John Doe",
        email: "johndoe@example.com"
    })

    // isko .then k andr b likh skti o lkin meny osmai ni likha meny oski jagah async or await ka use krlea hai...
    res.send("Nice")
      
})

// ===================END DB KA KAM==============


// Using Middlewares..
// And ye 1 middleware hai isley hum isko app.use k andr use krygy..
// ----Ye middleware get mthod klye use hoe hai...
app.use(express.static(path.join(path.resolve(), "public")))
// ----Ye middleware post method klye use hoe hai...
app.use(express.urlencoded({extended: true}))
// ---- Ye middleware cookies klye use hoe hai...
app.use(CookieParser())


app.set("view engine", "ejs");


// AUTHENTICATION KA KAM MENY YAHAN SEPARATE FILE MAI DUBARA SY KR RI O TA K SYNTAX CLEAR HO...

// next ko use krty hain authentication mai;
const isAuthenticated = async(req, res, next) => {
    const {token} = req.cookies;
    if(token){
        // ab m osko kahogi k last kam ye hai k iss check k andr jwt token ki value ko decoded krdo...
        const decoded = jwt.verify(token, "aehbdnaskmnhb")
        console.log(decoded);
        // ye wala step basically m user ki information ko forever save krny klye use krogi and m osko
        // kahi b kisi b jagah access krskogi.. user ko
        req.User = await user.findById(decoded._id);

        next();

    } else {
        res.render("login")
    }
}


app.get('/', isAuthenticated, (req, res) => {
    // ab m isk andr req.user ko log krk dekhti o...
    console.log(req.User);
    
    res.render("logout");
})

    //Authentication klye we will use Login...

//-------Ye Login klye hai...
app.post("/login", async (req, res) => {
    console.log(req.body);
    // destructure req.body...
    const { name, email} = req.body;
    // create user...(ye islye kea hai ta k jo data cookies mai store hai wo db mai users k andr store o jye...)
    const User = await user.create({
        name,
        email
    })

    // ab mai jwt token k through apny data ko secure krogi ...

    // ye iska structure hai...
    // jwt.sign(data, secretKey, options)
    const tokenn = jwt.sign({_id: User._id}, "aehbdnaskmnhb")
    console.log(tokenn);
    

    // cookies ko set krny klye we use res..
    // lkin User._id basically token ki value hai or wo encoded form mai h lkin m osko secure krna chahti o osklye
    // 1 package install krogi jiska nam hai..(jsonwebtoken)
    res.cookie("token", tokenn, {
        // cookie k kafi methids hoty hain, iss method ka mtlb hai k more secure rhyga...
        // means client side pr user nahi krskty hum, bss server side pr krskty hain...
        httpOnly: true,
        // expires ka mtlb hai k cookie kbtk store rhygi jesy meny batya hai k 60 seconds tk store rhy bs...
        expires: new Date(Date.now() + 60*100)
    });
    // redirect means k infinite times render hota rhy...
    res.redirect("/");
})

//-----------Ye logout klye hai...
app.get("/logout", (req, res) => {
    res.cookie("token", "null", {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.redirect("/");
})  // Authentication ends here............


// listen server...
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// ======================INSTALL IMP PACKAGES =================

// cookies klye cookie-parser pkg install krna hota hai and import b and use b as a middleware
// and cookies k andr jo value jti o wo encoded hoti hai but fer b we need to secure osklye
// hum pkg install krygy jiska nam hai jsonwebtoken(jwt)... 