'use strict';

const {  } = require('../db')


module.exports.Null = async () => {
    try {
        let data = await Null()
        return data
    } catch(err) {
        throw new Error(err.message)
    } 
}
