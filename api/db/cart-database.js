'use strict';

var mysql = require("../core/mysql");

module.exports.PostPurchaseNoAuth = (userData) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`
            INSERT INTO addresses (addresses.address_streetname, addresses.address_housenumber, addresses.address_country, addresses.address_postcode)
            VALUES ("${userData.streetname}", "${userData.housenumber}", "${userData.country}", "${userData.postcode}");
            `, function(err, results, fields) {
                var addrId = results.insertId;
                sqlclient.query(`
                INSERT INTO customers (customers.customer_firstname, customers.customer_lastname, customers.customer_email, customers.customer_registered, customers.customer_phone, customers.address_id)
                VALUES("${userData.firstname}", "${userData.lastname}", "${userData.email}", 1, "${userData.phone}", ${results.insertId});
                `, function(err, results, fields) {
                    // console.log(userData)
                    let cart = JSON.parse(userData.cart)
                    sqlclient.query(`
                    INSERT INTO orders (orders.customer_id, orders.address_id, orders.order_payment_type, orders.order_date, orders.order_status, orders.order_total)
                    VALUES(${results.insertId}, ${addrId}, "Mastercard", "1970-01-01", "Processing", ${userData.total});
                    `, function(err, results, fields) {
                        console.log(err)
                        console.log(results)
                        const orderId = results.insertId
                        for(let item in cart) {
                            sqlclient.query(`INSERT INTO order_items (order_items.order_id, order_items.product_id, order_items.order_item_quantity)
                            VALUES(${orderId}, ${cart[item].product.id}, ${cart[item].count})
                            `)
                        }
                        resolve({message: 'Money well spend', success: true})
                    })
                })
            })
        })
    });
}

module.exports.PostPurchaseAuth = (auth, userData) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            let cart = JSON.parse(userData.cart)
            sqlclient.query(`
            INSERT INTO orders (orders.customer_id, orders.address_id, orders.order_payment_type, orders.order_date, orders.order_status, orders.order_total)
            VALUES((SELECT customer_id from logins WHERE login_username = "${auth.name}"), (SELECT address_id FROM cart.customers WHERE customer_id = ${auth.sub}), "Mastercard", "1970-01-01", "Processing", ${userData.total});
            `, function(err, results, fields) {
                const orderId = results.insertId
                for(let item in cart) {
                    sqlclient.query(`INSERT INTO order_items (order_items.order_id, order_items.product_id, order_items.order_item_quantity)
                    VALUES(${orderId}, ${cart[item].product.id}, ${cart[item].count})
                    `)
                }
                resolve({message: 'Money well spend', success: true})
            })
        })
    });
}