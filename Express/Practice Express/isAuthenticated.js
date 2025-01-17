import express from 'express';
// ye public m jo html thie mnz sttaic file send krny klye path use kea hau..
import path from 'path';
// 01-- create server...
const app = express();
// mongoose ko import krna hai node js ko mongodb k stah connect krny klye...
import mongoose from 'mongoose';

// import cookie-parser because its also a middleware:
import CookieParser from 'cookie-parser';

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
const messageSchema = new mongoose.Schema({
    name: String,
    email: String
})

// NOW I WILL CREATE MODEL OR CAN SAY COLLECTION..
const Message = mongoose.model("Message", messageSchema);

// Ab mai data bejogi...
app.get("/add", async(req, res) => {

    // Ab mai module ko use krlogi..and create jismai mera obj hoga...
    // pehly data add hoga and then message mai 'Nice' chala jyega...
    await Message.create({
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
const isAuthenticated = (req, res, next) => {
    const {token} = req.cookies;
    if(token){
        next();
    } else {
        res.render("login")
    }
}


app.get('/', isAuthenticated, (req, res) => {
    res.render("logout");
})


            //Authentication klye we will use Login...

//-------Ye Login klye hai...
app.post("/login", (req, res) => {
    console.log(req.body);
    
    // cookies ko set krny klye we use res..
    res.cookie("token", "iamin", {
        // cookie k kafi methids hoty hain, iss method ka mtlb hai k more secure rhyga...
        // means client side pr message nahi krskty hum, bss server side pr krskty hain...
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