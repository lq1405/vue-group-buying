let {
    db
} = require('../../tools')

module.exports = (req, res) => {
    db.collection('homeIcons').findOne({})
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.json(data);
        })
}