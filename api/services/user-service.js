'use strict';

const userDatabase = require('../db/user-database')


module.exports.PostRegister = async (userData) => {
    try {
        let data = userDatabase.PostRegister(userData)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.PostLogin = async (userData) => {
    try {
        let data = userDatabase.PostLogin(userData)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}
