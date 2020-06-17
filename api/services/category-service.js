'use strict';

const categoryDatabase = require('../db/category-database')


module.exports.GetAllCategories = async () => {
    try {
        let data = await categoryDatabase.GetAllCategories()
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

module.exports.GetCategoryByCategoryId = async (categoryId) => {
    try {
        let data = await categoryDatabase.GetCategoryByCategoryId(categoryId)
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}

