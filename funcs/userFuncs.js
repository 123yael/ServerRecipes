
const model = require('../models/userModel')


const funcUser = {
    // פונקציה שמחזירה את כל המשתמשים
    getAllUsers: async () => {
        const users = await model.find({})
        return users;
    },
    // פונקציה שמחזירה משתמש על פי name and pass
    getUserByNameAndPass: async (n, p) => {
        let fn = n.split(" ")[0]
        if(fn === process.env.ManagerFirstName && p === process.env.ManagerPass){
            let manager = {
                firstName: process.env.ManagerFirstName,
                lastName: process.env.ManagerLastName,
                pass: process.env.ManagerPass,
                email: process.env.ManagerEmail
            }
            return manager
        }
        const user = await model.find({firstName: fn, pass: p})
        return user[0];
    },
    // פונקצית הוספת משתמש
    addUser: async (u) => {
        const user = await model.insertMany(u)
        return user;
    },
}

module.exports = funcUser