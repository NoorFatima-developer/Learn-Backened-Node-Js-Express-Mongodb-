import express from 'express';
// ye public m jo html thie mnz sttaic file send krny klye path use kea hau..
import path from 'path';
// 01-- create server...
const app = express();
// mongoose ko import krna hai node js ko mongodb k stah connect krny klye...
import mongoose from 'mongoose';
// import cookie-parser because its also a middleware:
import CookieParser from 'cookie-parser';

// import jwt token...(to make value of cookie token secure..and also decode that value...)
import jwt from "jsonwebtoken";

// import bcrypt for password encryption and make password strong by storing them in hash...
import bcrypt from "bcrypt";


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
    email: String,
    password: String
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
        // Authenticated m access krskoig..
        // and hum req.User sy kabi b data ko dynamically access krsty hain...
        req.User = await user.findById(decoded._id);

        next();
    } else {
        res.redirect("login")
    }
}

// ye basically next wala part hai...
app.get('/', isAuthenticated, (req, res) => {
    // ab m isk andr req.user ko log krk dekhti o...
    console.log(req.User);
    
    // and m dynamically name ko access krskti hon ku k name ko meny ejs k andr likha hai and yahan osko pass krdogi like this:

    res.render("logout", {name: req.User.name});
})

    //...Authentication klye we will use Login...

// register ko m yahan pr pehly get krogi and then login mai redirect krogi...

app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})

//-------Ye POST METHOD Register klye hai...
app.post("/register", async (req, res) => {
    console.log(req.body);    
    // destructure req.body...
    const { name, email, password } = req.body;
    // acha yahan pr 1 check laga do k aghr user exist nahi krta db mai tu osko kaho k register kro ...
     let User = await user.findOne({email})
     if(User){
        // return console.log("Register Frst");
        // ab redirect krny sy pehly mjy register ko get b krna pryga so oper m get krlogi...
        return res.redirect("/login"); 
    }
    
    // password ko secure krogi...
    // bcrypt.hash(password, saltRounds)
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user...(ye islye kea hai ta k jo data cookies mai store hai wo db mai users k andr store o jye...)
    User = await user.create({
        name,
        email,
        password:hashedPassword
    })

    // ab mai jwt token k through apny cookies k data ko secure krogi ...

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


// Ye POST METHOD login klye hai...

app.post("/login", async (req, res) =>{
    const { email, password} = req.body;
     let User = await user.findOne({email})
    //  aghr tu user ka data db k data sy match ni hoa tu osko kahygay k redirect kr jao /register pr..
     if(!User) return res.redirect("/register");
    //  lkin aghr iska data db k data sy match kr jta hai tu phr hum [assword ko match krygy..
    // lkin jo password hai wo hash ki form mai hona chhaye islye hum "bcrypt" pkg ko install krygy...
    // const isMatch = User.password === password;
    // ab password match krny time b bcrypt dena pryga islye hum ye nichy wala method use krygy...

        const isMatch = await bcrypt.compare(password, User.password)
    // email yahan sath islye di hai ta k email save rhy...
    if(!isMatch) return res.render("login", {email,message: "Incorrect Password"});
    // or aghr password match krgya tu will do this:
    const tokenn = jwt.sign({_id: User._id}, "aehbdnaskmnhb")
    res.cookie("token", tokenn, {
        httpOnly: true,
        expires: new Date(Date.now() + 60*100)
    });
    res.redirect("/");
});



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

