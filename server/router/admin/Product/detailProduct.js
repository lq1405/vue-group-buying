let {
    db
} = require('../../tools')
module.exports = (req, res) => {
    console.log(req.query)
    db.collection('product').findOne(req.query)
        .then(data => {
            res.json(data[0])
        })
        .catch(data => {
            console.log(data)
        })
}