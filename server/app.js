let express = require('express');
let ejs = require('ejs');
let path = require('path');

let app = express();
let root = process.cwd();
app.engine('.html', ejs.__express);
app.use('/static/', express.static(path.join(root, '/static/')));
app.use('/favicon.io', express.static(path.join(root, '/data/home/favicon.io')));
app.use('/home', express.static(path.join(root, '/static/home/home')))


app.use('/data/', (req, res, next) => {
    let arr = req.url.split('?');
    arr[0] += '.json';
    req.url = arr.join('?');
    console.log(req.url);
    next();
}, express.static(path.join(root, '/static/data')));

app.get('/', (req, res) => {
    res.render('home.html');
})

app.listen(3000);