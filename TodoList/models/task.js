import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // createAt mandatory nahi hai but iss sy ye pta chljyega k user kb create hoa hai...
    createAt: {
        type: Date,
        default: Date.now,
    }
});

export const task = mongoose.model('Task', schema);

