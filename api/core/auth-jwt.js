'use strict';

const jwt = require('jsonwebtoken');

const authToken = (token, getAuthUserData) => {
    return jwt.verify(token, 'secretkey', (err, authData) => {
        if(err) {
            return false
        } else {
            if(getAuthUserData) {
                delete authData.user.password;
                return(authData)
            }
            return true
        }
    })
}

module.exports = authToken