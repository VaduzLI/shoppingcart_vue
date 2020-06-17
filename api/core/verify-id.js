'use strict';

const verifyId = (req, res, next) => {
    const { id } = req.params
    if(!isNaN(id)) {
        next()
    } else {
        res.sendStatus(404)
    }
}

module.exports = verifyId