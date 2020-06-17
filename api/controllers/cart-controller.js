'use strict';

const authToken = require('../core/auth-jwt')

module.exports.Null = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    try {
        let data = await null()
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}
