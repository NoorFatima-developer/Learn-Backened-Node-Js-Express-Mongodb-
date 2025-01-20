import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export const user = mongoose.model('User', schema);