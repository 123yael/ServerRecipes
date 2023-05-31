
// טעינת המודול שמספק תכונות של יישומי אינטרנט
let express = require('express')
let app = express()

// מגדיר את התקיה public כסטטית
app.use(express.static('public'));

// יצירת cors לשרת אפשרות גישה לצד client
let myCors = require('cors')
app.use(myCors())

// תעבורת רשת יותר מאובטחת
let mybodyParser = require('body-parser')
app.use(mybodyParser())

// .env טעינת המודול המאפשר שימוש בהצפנת קובץ
require('dotenv').config();

// טעינת קונטרולר המשתמשים
let userController = require('./controllers/userController')
app.use('/users', userController)

// טעינת קונטרולר המתכונים
let recipeController = require('./controllers/recipeController')
app.use('/recipes', recipeController)

// טעינת המודול שמשמש לחיבור למונגו די בי
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/recipesDB');

// שם הפורט של השרת
const PORT = 8080

// הגדרת ההזנה של שרת בשם הפורט
app.listen(PORT, () => {
    console.log("hello world");
})
