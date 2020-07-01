'use strict';

const jwt = require('jsonwebtoken');

const authToken = (token, getAuthUserData) => {
    return jwt.verify(token, 'secretkey', (err, authData) => {
        if(err) {
            console.log(err)
            return false
        } else {
            if(getAuthUserData) {
                return(authData)
            }
            return true
        }
    })
}

module.exports = authToken