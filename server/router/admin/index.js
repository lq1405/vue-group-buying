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
    //修改商品时获取的详情的接口
    .get('/admin/product/detail', require('./Product/detailProduct'))
    //修改商品后提交新的信息的接口
    .post('/admin/product/edit', require('./Product/editProduct'))
    //删除商品的接口
    .post('/admin/product/delete', require('./Product/deleteProduct'))
    //创建分类的标签的接口
    .post('/home/icons/create', require('./Icons/createIcons'))
    //后台管理图标时进入列表的接口
    .get("/home/icons/list", require('./Icons/getIconsList'))