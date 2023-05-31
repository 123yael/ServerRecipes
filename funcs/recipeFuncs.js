
const model = require('../models/recipeModel')


const funcRecipe = {
    // פונקציה שמחזירה את כל המתכונים
    getAllRecipes: async () => {
        const recipes = await model.find({})
        return recipes;
    },
    // פונקציה שמחזירה מתכון על פי name
    getRecipeByName: async (n) => {
        const recipe = await model.find({name: n})
        return recipe;
    },
    // פונקצית הוספת מתכון
    addRecipe: async (r) => {
        const recipe = await model.insertMany(r)
        return recipe
    },
    // פונקציה להסרת מתכון מהמערכת המתכונים על פי שם מתכון ושם משתמש
    dellRecipeByNameRNameU: async (nameR, nameU) => {
        if(nameU === "yael malkin")
            return await model.deleteOne({name: nameR})
        else
            return await model.deleteOne({name: nameR, userName: nameU})
    }
}

module.exports = funcRecipe