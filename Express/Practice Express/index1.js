import express from 'express';
import path from 'path';
// 01-- create server...
const app = express();

// 04--(ii) Render static file..
// And ye 1 middleware hai isley hum isko app.use k andr use krygy..
app.use(express.static(path.join(path.resolve(), "public")))


// 04--(i) Setting up view engine...

app.set("view engine", "ejs");

// 03--- Ab data send krny klye hmy if else conditions ni lagani prygi jesy hum node js mai lagaty thy wo hum yahan pr bach jygy on conditions sy...
// USE GET method to send data...
app.get('/', (req, res) => {
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
    res.render("index", {name : "Noor Fatima"})

    // Render file...(Statically)
    // And meny file islye delete ki hai ku k index.html m sb comment b krdo fer b wo by default render hoti hai..
    // res.sendFile("index.html")

})

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
