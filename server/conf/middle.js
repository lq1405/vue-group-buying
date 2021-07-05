let ejs = require('ejs');
let express = require('express');
let path = require('path');
//引入session
let session = require('express-session');

let bodyParser = require('body-parser')

let {
    ROOT,
    STATICS
} = require('./index')

module.exports = app => {
    app.engine('.html', ejs.__express);

    app.use(session({
        secret: 'luo',
        resave: true,
        saveUninitialized: false

    }))
    app.use(bodyParser.json());
    for (let key in STATICS) {
        app.use(key, express.static(path.join(ROOT, STATICS[key])));
    }
}