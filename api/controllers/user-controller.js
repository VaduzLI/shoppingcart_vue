'use strict';

const authToken = require('../core/auth-jwt');
const userService = require("../services/user-service");

module.exports.PostRegister = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    try {
        let request = await userService.PostRegister(req.body)
        console.log(request)
        res.status(200).json(request)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}

module.exports.PostLogin = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    try {
        let request = await userService.PostLogin(req.body)
        res.status(200).json(request)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}

module.exports.GetOrders = async (req, res, next) => {
    let auth = authToken(req.token, true)
    if(!auth) {res.sendStatus(401)}
    try {
        let request = await userService.GetOrders(auth)
        res.status(200).json(request)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}