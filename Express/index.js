// First of all why we need Express???

// Express ki hmy need islye pri k jo kam hum nodejs sy server create krny mai 100 lino sy kr rhy thy wo yahan pr 20lines mai hoga
// Islye we need to use Express..

const express = require("express");
 const app = express();
 const port = 3000;

//  Listen:

app.listen(port, ()=>{
    console.log(`Server is working on port: ${port}`);
    
})