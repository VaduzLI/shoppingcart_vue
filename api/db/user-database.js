'use strict';

var mysql = require("../core/mysql");

module.exports.PostRegister = (userData) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`
            INSERT INTO addresses (addresses.address_streetname, addresses.address_housenumber, addresses.address_country, addresses.address_postcode)
            VALUES ("${userData.streetname}", "${userData.housenumber}", "${userData.country}", "${userData.postcode}");
            `, function(err, results, fields) {
                sqlclient.query(`
                INSERT INTO customers (customers.customer_firstname, customers.customer_lastname, customers.customer_email, customers.customer_registered, customers.customer_phone, customers.address_id)
                VALUES("${userData.firstname}", "${userData.lastname}", "${userData.email}", 1, "${userData.phone}", ${results.insertId});
                `, function(err, results, fields) {
                    sqlclient.query(`
                    INSERT INTO logins (logins.customer_id, logins.login_username, logins.login_password)
                    VALUES(${results.insertId}, "${userData.username}", "${userData.password}")
                    `, function(err, results, fields) {
                        resolve({message: 'User Registerd', success: true})
                    })
                })
                
            })
        })
    });
}

module.exports.PostLogin = (userData) => {
    return new Promise(function(resolve, reject) {
        mysql.getConnection(function(err, sqlclient) {
            sqlclient.query(`SELECT * FROM logins WHERE login_username = "${userData.username}"`, function(err, results, fields) {
                resolve(results[0])
            })
        })
    });
}