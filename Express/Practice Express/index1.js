import express from 'express';

// 01-- create server...
const app = express();

// 03--- Ab data send krny klye hmy if else conditions ni lagani prygi jesy hum node js mai lagaty thy wo hum yahan pr bach jygy on conditions sy...
// USE GET method to send data...
app.get('/getproducts', (req, res) => {
    // res.send("Hi");
    // res.sendStatus(404);
    // res.status(200).send("Meri mrzi")
    // And ismai hum data json format m b zada tr send krty hain...
    res.json({
       success : true,
       products : []
    });
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
