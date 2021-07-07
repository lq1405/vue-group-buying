let {
    db
} = require('../../tools')

module.exports = (req, res) => {
    db.collection('product').findOne({})
        .then(data => {
            res.json(data.splice(0, 10))
        })
}