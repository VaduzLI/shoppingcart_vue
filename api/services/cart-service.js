'use strict';

const cartDatabase = require('../db/cart-database')


module.exports.PostPurchaseNoAuth = async (body) => {
    try {
        let data = cartDatabase.PostPurchaseNoAuth(body)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.PostPurchaseAuth = async (auth, body) => {
    try {
        let data = cartDatabase.PostPurchaseAuth(auth, body)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}