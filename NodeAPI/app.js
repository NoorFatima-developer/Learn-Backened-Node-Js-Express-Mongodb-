//01--- import express:
import express from 'express';

//02--- create server:
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');  // when we go to localhost:4000 then it will show hello world! on the browser. 
})


// Get data from API...
app.get('/users/all', (req, res) =>{
        res.json({
            success: true,
            users: []
        });
});



//03--- listen on port 4000:
app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
