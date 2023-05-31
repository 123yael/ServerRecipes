const express = require('express')
const router = express.Router()
// משמש להעלאת תמונה לשרת
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

// פונקציה שמעלה את התמונה לשרת
router.post('/upload', upload.single('image'), (req, res) => {
    res.json({send: 'Image uploaded successfully'});
});
  

const funcs = require('../funcs/recipeFuncs')

// שליפת כל המתכונים
router.get('/getAllRecipes', (req, res) => {
    funcs.getAllRecipes().then(recipes =>{
        res.json(recipes);
    })
})

// שליפת מתכון על פי שם
router.get('/getRecipeByName/:n', (req, res) => {
    let name = req.params.n
    funcs.getRecipeByName(name).then(recipe =>{
        res.json(recipe);
    })
})

// הוספת מתכון
router.post('/addRecipe', (req, res) => {
    let recipe = req.body
    funcs.addRecipe(recipe).then(r =>{
        res.json(r);
    })
})

// מחיקת מתכון
router.delete('/dellRecipeByNameRNameU/:nameR/:nameU', (req, res) => {
    let nameR = req.params.nameR
    let nameU = req.params.nameU
    funcs.dellRecipeByNameRNameU(nameR, nameU).then(r =>{
        res.json(r);
    })
})

module.exports=router