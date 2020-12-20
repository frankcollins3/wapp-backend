const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Settings Schema
const settingsSchema = new Schema({
    weight: Number,
    height: Number,
    gender: String,
    goal: {
        type: Number,
        // Average for women in cups 
        default: 11.5
    },
    reminder: {
        type: Number,
        // In hours
        default: 1
    }
})

const dataSchema = new Schema({
    day: Date,
    dayName: String,
    goalMet: Boolean,
    goalPercent: Number,
    reminderChecked: [Boolean]
})

// User Schema
const userSchema = new Schema({
    username: String,
    googleAccessToken: String,
    googleIdToken: String,
    googleRefreshToken: String,
    tokenExpiration: Date,
    settings: settingsSchema,
    data: dataSchema
});

module.exports = User = mongoose.model('User', userSchema);;