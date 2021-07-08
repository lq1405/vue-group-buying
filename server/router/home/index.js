let {
    Router
} = require('express');

module.exports = new Router()
    //主页请求icons的接口
    .get('/home/icons', require('./home/getIcons'))
    //主页的猜你喜欢获取商品的接口
    .get('/home/lovely', require('./home/lovely'))
    //点击商品形式详情页创建时请求商品的详细信息的接口
    .get('/home/detailMessage', require('../admin/Product/detailProduct'))
    //进入分类的时获取改分类的商品的接口
    .post('/home/getFoodList', require('./home/getFoodList'))