'use strict';

const authToken = require('../core/auth-jwt')
const categoryService = require("../services/category-service")

module.exports.GetAllCategories = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    // const { id } = req.params;

    try {
        let data = await categoryService.GetAllCategories()
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}

module.exports.GetCategoryByCategoryId = async (req, res, next) => {
    // let auth = authToken(req.token, true)
    // if(!auth) {res.sendStatus(401)}
    const { id } = req.params;

    try {
        let data = await categoryService.GetCategoryByCategoryId(id)
        res.status(200).json(data)
        next()
    } catch(err) {
        res.sendStatus(500) && next(err);
    }
}