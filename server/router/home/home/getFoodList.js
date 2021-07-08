let {
    db
} = require('../../tools')
module.exports = (req, res) => {
    db.collection('product').findOne(req.body)
        .then(data => {
            res.json({
                errno: 0,
                data: data
            })
        })
        .catch(data => {
            res.json(data)
        })
}