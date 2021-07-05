let express = require('express');
let path = require('path');

let {
    ROOT
} = require('../conf')

module.exports = app => {
    app.use('/data/', (req, res, next) => {
        let arr = req.url.split('?');
        arr[0] += '.json';
        req.url = arr.join('?');
        console.log(req.url);
        next();
    }, express.static(path.join(ROOT, '/static/data')));

    app.post('/admin/login', (req, res) => {
        res.json({
            username: 'll11111ll',
            state: 'success'
        })
    })
    // app.post('/admin/login', (req, res) => {
    //     res.json({
    //         username: 'llll',
    //         state: 'error',
    //         msg: "账号密码错误"
    //     })
    // })

    app.get('/admin/userLoginInfo', (req, res) => {
        res.json({
            username: 'lq',
            //是否登陆过
            state: 1
        })
    })

    // app.post('/admin/manage/updatePassword', (req, res) => {
    //     res.json({
    //         username: 'lq',
    //         state: 1
    //     })
    // })
    app.post('/admin/manage/updatePassword', (req, res) => {
        res.json({
            username: 'lq',
            state: 0,
            msg: '更新失败'
        })
    })

    app.post('/admin/product/upload', (req, res) => {
        res.json({
            state: 1,
            img: '/static/home/home/img/lovelyFile/00.jpg',
            msg: "success"
        })
    })

    app.post('/admin/product/create', (req, res) => {
        res.json({
            state: 1,
            msg: 'success'
        })
    })

    app.use('/admin/product/list', (req, res, next) => {
        next();
    }, express.static(path.join(ROOT, '/static/data/lovely.json')));


    app.use('/admin/product/detail', (req, res, next) => {
        console.log(req.query);
        next();
    }, express.static(path.join(ROOT, '/static/data/edit.json')));


    app.post('/admin/product/delete', (req, res) => {
        res.json({
            state: 1,
            msg: "success"
        })
    })
}