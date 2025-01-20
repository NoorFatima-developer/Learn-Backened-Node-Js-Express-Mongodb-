import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },

    // createAt mandatory nahi hai but iss sy ye pta chljyega k user kb create hoa hai...
    createAt: {
        type: Date,
        default: Date.now,
    }
});

export const task = mongoose.model('Task', schema);

