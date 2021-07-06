let {
    Router
} = require('express');

module.exports = new Router()
    //判断用户是不是已经登陆过
    .get('/admin/userLoginInfo', require('./Login/userLoginInfo'))
    //退出登陆
    .get('/admin/userLoginOut', require('./Login/userLoginOut'))
    //登陆接口
    .post('/admin/login', require('./Login/login'))
    //用户更改用户名密码
    .post('/admin/user/updatePassword', require('./User/update'))
    //图片上传接口
    .post('/admin/product/upload', require('./Product/uploadImg'))
    //创建商品接口
    .post('/admin/product/create', require('./Product/createProduct'))
    //获取商品列表的接口
    .get('/admin/product/list', require('./Product/productList'))