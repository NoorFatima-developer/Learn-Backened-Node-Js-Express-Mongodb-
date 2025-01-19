// isk andr mai db ka schema or model rkhogi..

import mongoose from "mongoose";

//Define a User Schema:
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

//Now, we'll create a model using the schema:
// Model ka name meny "User" dea hai and osko aleda variable User m store kea hai..
export const user = mongoose.model('User', schema);   