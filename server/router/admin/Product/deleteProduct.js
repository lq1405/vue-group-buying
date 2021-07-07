let {
    db
} = require('../../tools')
let {
    MESSAGE
} = require('../../../conf/MESSAGE')
module.exports = (req, res) => {
    db.collection('product').deleteOne(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.json(data)
        })
}