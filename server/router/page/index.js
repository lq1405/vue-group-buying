let {
    Router
} = require('express');

module.exports = new Router()
    .get('/', (req, res) => {
        res.render('home.html');
    })
    .get('/admin', (req, res) => {
        res.render('admin.html');
    })