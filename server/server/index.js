let {
    HTTP_PORT,
} = require('../conf')

module.exports = app => {
    app.listen(HTTP_PORT);
}