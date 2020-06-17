'use strict';

const authToken = require('../core/auth-jwt');
const productService = require("../services/product-service");

module.exports.GetProductByProductId = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    const { id } = req.params;
    try {
        let data = await productService.GetProductByProductId(id)
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}

module.exports.GetProductByCategoryId = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    const { id } = req.params;
    try {
        let data = await productService.GetProductByCategoryId(id)
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}

module.exports.getAllProducts = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    // const { id } = req.params;
    try {
        let data = await productService.getAllProducts()
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}
