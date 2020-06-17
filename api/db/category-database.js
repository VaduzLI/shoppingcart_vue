'use strict';

var mysql = require("../core/mysql");

module.exports.GetAllCategories = () => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM categories`, function(err, results, fields) {
                resolve(results)
            })
        })
    });
}

module.exports.GetCategoryByCategoryId = (categoryId) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM categories WHERE category_id = ${categoryId}`, function(err, results, fields) {
                resolve(results[0])
            })
        })
    });
}