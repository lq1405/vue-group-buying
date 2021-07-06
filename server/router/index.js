let page = require('./page');
let admin = require('./admin');
// let home = require('./home');

module.exports = app => {
    app.use(page);
    app.use(admin);
    // app.use(home);
}

// module.exports = app => {
//     app.get('/', (req, res) => {
//         res.render('home.html');
//     })
//     app.get('/admin', (req, res) => {
//         res.render('admin.html');
//     })
// }