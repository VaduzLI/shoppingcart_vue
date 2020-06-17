'use strict';

const paginationInput = (page, perPage) => {
    if(page < 1 || isNaN(page) || page == undefined) {
        page = 1
    }
    if(perPage < 1 || perPage > 100 || isNaN(perPage) || perPage == undefined) {
        perPage = 10
    }

    return ({page: parseInt(page), perPage: parseInt(perPage)})
}

module.exports = paginationInput