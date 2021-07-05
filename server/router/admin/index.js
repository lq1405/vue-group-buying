let {
    Router
} = require('express');

module.exports = new Router()
    .get('/admin/userLoginInfo', require('./Login/userLoginInfo'))
    .post('/admin/login', require('./Login/login'))