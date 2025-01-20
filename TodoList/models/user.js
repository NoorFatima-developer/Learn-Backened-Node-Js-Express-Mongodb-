import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        // lowercase: true,
        // trim: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
        // minlength: 8,
        // match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },

    // createAt mandatory nahi hai but iss sy ye pta chljyega k user kb create hoa hai...
    createAt: {
        type: Date,
        default: Date.now,
        // select: false,
    }
});

export const user = mongoose.model('User', schema);

