'use strict';

const pagination = (page, perPage, data, count) => {

    let skip = (page - 1) * perPage;

    let numPages = Math.ceil(count / perPage);

    let paginate = {}

    paginate.total = count

    paginate.per_page = perPage

    paginate.current_page = page

    paginate.last_page = numPages

    paginate.first_page = 1

    paginate.next_page = (page * perPage < count) ? paginate.next_page = page + 1 : null

    paginate.prev_page = (skip > 0) ? paginate.prev_page = page - 1 : null

    paginate.from = skip

    paginate.to = skip + data.data.length

    paginate.data = data.data

    return paginate
}

module.exports = pagination