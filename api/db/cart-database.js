'use strict';

var mysql = require("../core/mysql");

module.exports.Null = async () => {
    try {
        let data = await null
        return ({data: data.recordset})
    } catch(err) {
        console.log(err)
        return err
    }
}