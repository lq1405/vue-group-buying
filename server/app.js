let express = require('express');

let server = require('./server')

let router = require('./router')

let middle = require('./conf/middle');

let app = express();

middle(app);

// let mock = require('./router/mock');
// mock(app);

router(app);

server(app);