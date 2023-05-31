const express = require('express')
const router = express.Router()

const funcs = require('../funcs/userFuncs')

// טעינת המודול של טיפול בקבצים
let fs = require('fs')

// Middleware - פונקציה שתקרה בכל קריאה לקונטרולר
router.use('/', (req, res, next) =>
{
    let url = req.url
    // במקרה שמוסיפים משתמש
    // כתיבה לתוך קובף שם משתמש, סיסמה, תאריך כניסה
    if(url === "/addUser") {
        let user = req.body
        let d = new Date()
        let line = `name user: ${user.firstName + " " + user.lastName}, pass: ${user.pass}, data of enter to the system: ${d.toLocaleDateString()}\n`      
        fs.appendFile('./enterUsers.txt', line, (err) => {
            if (err)
                console.log(err)
            else
                console.log("Successfully written");
        })
    }
    next()
})


// שליפת כל המשתמשים
router.get('/getAllUsers', (req, res) => {
    funcs.getAllUsers().then(users =>{
        res.json(users);
    })
})

// שליפת משתמש על פי שם משתמש וסיסמה
router.get('/getUserByNameAndPass/:n/:p', (req, res) => {
    let name = req.params.n
    let pass = req.params.p
    funcs.getUserByNameAndPass(name, pass).then(user =>{
        res.json(user);
    })
})

// הוספת משתמש
router.post('/addUser', (req, res) => {
    let user = req.body
    funcs.addUser(user).then(user =>{
        res.json(user);
    })
})


module.exports=router