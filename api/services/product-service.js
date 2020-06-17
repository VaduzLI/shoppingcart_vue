'use strict';

const productDatabase = require('../db/product-database')

module.exports.GetProductByProductId = async (productId) => {
    try {
        let data = await productDatabase.GetProductByProductId(productId)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.GetProductByCategoryId = async (categoryId) => {
    try {
        let data = await productDatabase.GetProductByCategoryId(categoryId)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.getAllProducts = async () => {
    try {
        let data = await productDatabase.getAllProducts()
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}
