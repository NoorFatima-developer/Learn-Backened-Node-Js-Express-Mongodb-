import mongoose from "mongoose";

// DB connection:(And wrap in function:)

export const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/", {
        dbName: "backendapi",
    }).then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
}
