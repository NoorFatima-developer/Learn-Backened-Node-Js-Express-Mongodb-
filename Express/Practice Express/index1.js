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

// Push data to array(ye form ki prac klye task hai)
const users = [];

// 04--(ii) Render static file..

// Using Middlewares..
// And ye 1 middleware hai isley hum isko app.use k andr use krygy..
// ----Ye middleware get mthod klye use hoe hai...
app.use(express.static(path.join(path.resolve(), "public")))
// ----Ye middleware post method klye use hoe hai...
app.use(express.urlencoded({extended: true}))
// ---- Ye middleware cookies klye use hoe hai...
app.use(CookieParser())

// 04--(i=>lkin static mai iski zrort ni prti html file b use krksty hain...) Setting up view engine...
app.set("view engine", "ejs");

// next ko use krty hain authentication mai;
const isAuthenticated = (req, res, next) => {
    const {token} = req.cookies;
    if(token){
        next();
    } else {
        res.render("login")
    }
}

// 03--- Ab data send krny klye hmy if else conditions ni lagani prygi jesy hum node js mai lagaty thy wo hum yahan pr bach jygy on conditions sy...
// USE GET method to send data...
app.get('/', isAuthenticated, (req, res) => {

    res.render("logout");

    // ----Render send request...
    // res.send("Hi");
    // res.sendStatus(404);
    // res.status(200).send("Meri mrzi")
    // ----Render json data...
    // And ismai hum data json format m b zada tr send krty hain...
    // res.json({
    //    success : true,
    //    products : []
    // });

    // ---Render file....(Dynamically)
    // Meny jo variable yahan pass kea hai osko mai ejs mai acces krskti o...by using <%=name %>...
    // res.render("index", {name : "Noor Fatima"})

    // =========================LEARN AUTHENTICATION=================================
    
    // Ab mai authentication sikhny lgi hon, Islye I will pass login here...
    
        // =======isk andr meny jo authentication wala kam kea hau m isk ander b krskti o lkin
        // mai osko oper aleda sy func authenticated ka bana k osk andr b krskti hon...

    // aghr meny / mai sari cookies ko access krna hai tu i will do this:
    // tu osklye mjy 1 package use krna pryga jiska nam hai: cookie-parser...
        // console.log(req.cookies);
    // aghr khali name ki value access krni hai i will do this:
        // const token = req.cookies.token;
    // const {token} = req.cookies
        // console.log(token);
    
        // if(token){
        //     res.render("logout")
        // }
        // else{
        //     res.render("login")
        // }
    // Render file...(Statically)
    // And meny file islye delete ki hai ku k index.html m sb comment b krdo fer b wo by default render hoti hai..
    // res.sendFile("index.html")

})

// Now I will get sucess page...

app.get("/sucess", (req, res) => {
    res.render("sucess")
})

// Using POST method to receive data from form.

// and by default tu / e hoga lkin aghr meny /contact krna hai tu mjy action mai b yhi krna hoga..
app.post("/contact", async(req, res) => {
    console.log(req.body);
    console.log(req.body.name);

    // Push data to array...(iss sy /users ps jany sy data show horha hai lkin m chahti hon k jesy e data submit o /users m na jye balky db mai chala jye..)
    // users.push({username: req.body.name, email: req.body.email});
    // DB sy connect klye hum push ni krygy...

    // const messageData = {name: req.body.name, email: req.body.email};
    // destructure name and email..ta k br br req.body na likhna pry..
    const {name, email} = req.body;
    // key value pair same ho tu essy b likh skty hain...
    // const messageData = {name:name, email:email};
    const messageData = {name, email};

    console.log(messageData);
    // Abi data console m aya hai ab mjy database mai b bejna hai tu osklye m essy data bejogi...
    await Message.create(messageData);
    
    // Render another file...lkin yahan render krny ki bjeye hum get oper krygy...get method mai...
    // res.render("sucess")
    res.redirect("/sucess");
})

// Ab me chahti o k jesy e m /users pr jao tu mery ps user ka data show o..
app.get("/users", (req, res) => {
    res.json({
    users})
})

// Authentication klye we will use Login...

//-------Ye Login klye hai...
app.post("/login", (req, res) => {
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
})// Authentication ends here............

// 02-- listen server...
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// Express k andr hm jb file send krty hain tu hum path ko import krty hain
// and then hum file send krty hain by using sendfile ettcc.. lkin oss sy
// aghr oss file k andr koi nam dea hai and meny osko pass krna tu wo essy nahi hoga
// osklye mjy 'ejs' use krna pryga...
// and ejs use klye zrori h k hum folder banaye jiska nam view ho...
// and index.html ki bjye file ka nam index.ejs hona chhaye but ye behave index file ki trhan hi krygi...



// render or send mai frq ye hota hai k 
// res.send() ka mtlb hota hai k m page pr direct ja k dekh skti o k kea pra hai, lkin 
// res.render() ka mtlb ye hota hai k jb data submit o ya post req o osk bd wo data osk andr jana chhaye or page pr tb render hona chhaye...
