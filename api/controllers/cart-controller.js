'use strict';

const authToken = require('../core/auth-jwt');
const cartService = require("../services/cart-service")

module.exports.PostPurchase = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    try {
        if(req.body.loggedIn) {
            let auth = authToken(req.body.token, true)
            console.log(auth)
            if(!auth) {res.status(401).json({errorCode: 401, errorMessage: "Token expired login to order"})}
            else {
                let data = cartService.PostPurchaseAuth(auth, req.body)
                res.status(200).json(data)
            }

        } else {
            let data = await cartService.PostPurchaseNoAuth(req.body)
            res.status(200).json(data)
        }
        next();
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}
