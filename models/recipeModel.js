
// טעינת המודול שמשמש לחיבור למונגו די בי
const mongoose = require('mongoose')

// הגדרת סכמת recipe
const recipeSchema = new mongoose.Schema(
    {
        _id: Number,
        name: String,
        description: String,
        img: String,
        level: String,
        duration: Number,
        numberOfDishes: Number,
        Instructions: String,
        userName: String,
        components: [{
            name: String,
            count: String
        }]
    }
);


const model = mongoose.model('Recipe', recipeSchema, 'recipes')

module.exports = model