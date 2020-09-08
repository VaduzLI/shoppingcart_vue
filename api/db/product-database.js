'use strict';

var mysql = require("../core/mysql");

module.exports.GetProductByProductId = (productId) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM products WHERE product_id = ${productId}`, function(err, results, fields) {
                resolve(results[0])
            })
            sqlclient.release()
        })
    });
}

module.exports.GetProductByCategoryId = (categoryId) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM products WHERE category_id = ${categoryId}`, function(err, results, fields) {
                resolve(results)
            })
            sqlclient.release()
        })
    });
}

module.exports.getAllProducts = () => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM products`, function(err, results, fields) {
                resolve(results)
            })
            sqlclient.release()
        })
    });
}