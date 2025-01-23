import mongoose from "mongoose";

// DB connection:(And wrap in function:)

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'Todo',
        writeConcern: { w: "majority" }
    }).then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
}