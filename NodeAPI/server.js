import { app } from "./app.js";
import { connectDB } from "./data/database.js";

//listen on port 5000:
app.listen(4000, () => {
    console.log('Server is running on port 5000');
})

// Connect Db:(data/database mai pra hai..)
connectDB();