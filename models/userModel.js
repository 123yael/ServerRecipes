
// טעינת המודול שמשמש לחיבור למונגו די בי
const mongoose = require('mongoose')

// הגדרת סכמת user
const userSchema = new mongoose.Schema(
    {
        _id: Number,
        firstName: String,
        lastName: String,
        pass: Number,
        email: String
    }
);


const model = mongoose.model('User', userSchema, 'users')

module.exports = model