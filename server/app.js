let express = require('express');
let ejs = require('ejs');
let path = require('path');

let app = express();
let root = process.cwd();
app.engine('.html', ejs.__express);
app.use('/static/', express.static(path.join(root, '/static/')));
app.use('/favicon.io', express.static(path.join(root, '/data/home/favicon.io')));
app.use('/home', express.static(path.join(root, '/static/home/home')))

//mock数据
app.use('/data/', (req, res, next) => {
    let arr = req.url.split('?');
    arr[0] += '.json';
    req.url = arr.join('?');
    console.log(req.url);
    next();
}, express.static(path.join(root, '/static/data')));

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

app.get('/', (req, res) => {
    res.render('home.html');
})
app.get('/admin', (req, res) => {
    res.render('admin.html');
})

app.listen(3000);