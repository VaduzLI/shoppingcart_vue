'use strict';

const userDatabase = require('../db/user-database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.PostRegister = async (userData) => {
    try {
        bcrypt.hash(userData.password, 10, async (err, hash) => {
            userData.password = hash;
            let data = userDatabase.PostRegister(userData)
            return data
        })
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.PostLogin = (userData) => {
    return new Promise(async function(resolve, reject) {
        let checkUsername = await userDatabase.PostLogin(userData)
        if(checkUsername == undefined) {
            resolve({error: "Incorrect cridentials", message: "Username is incorrect", code: 401})
        }
        let checkPassword = await bcrypt.compare(userData.password, checkUsername.login_password);

        if(checkPassword) {
            try {
                let signData = {};
                signData.sub = String(checkUsername.login_id);
                signData.name = checkUsername.login_username;
                console.log(signData);
                let token = jwt.sign(signData, 'mycoolkey', { expiresIn: '1h'})
                console.log(token)
                resolve({token}) 
            }
            catch(err) {
                reject(new Error(err))
            }
        } else {
            resolve({error: "Incorrect cridentials", message: "Password is incorrect", code: 401})
        }
    })
}
