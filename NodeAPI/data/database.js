import mongoose from "mongoose";

// DB connection:
mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "backendapi",
}).then(() => console.log("Database connected"))
.catch((e) => console.log(e));


