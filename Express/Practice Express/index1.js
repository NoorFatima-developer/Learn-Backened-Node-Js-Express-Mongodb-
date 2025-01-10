import express from 'express';

// 01-- create server...

const app = express();

// 03--- Ab data send krny klye hmy if else conditions ni lagani prygi jesy hum node js mai lagaty thy wo hum yahan pr bach jygy on conditions sy...
// USE GET method to send data...

app.get('/getproducts', (req, res) => {
    // res.send("Hi");
    // res.sendStatus(404);
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

// 03-- define routes...