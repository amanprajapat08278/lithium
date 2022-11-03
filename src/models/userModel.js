const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('ResisterPeople', userSchema)
