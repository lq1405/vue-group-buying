let page = require('./page');
let admin = require('./admin');

module.exports = app => {
    app.use(page);
    app.use(admin);
}

// module.exports = app => {
//     app.get('/', (req, res) => {
//         res.render('home.html');
//     })
//     app.get('/admin', (req, res) => {
//         res.render('admin.html');
//     })
// }