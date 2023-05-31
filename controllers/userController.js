const express = require('express')
const router = express.Router()

const funcs = require('../funcs/userFuncs')

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