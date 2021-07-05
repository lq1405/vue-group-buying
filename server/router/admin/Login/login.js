// let findOne = require('../../dataBase/findOne');

let {
    db
} = require('../../tools')

module.exports = (req, res) => {

    db.findOne(req.body).then((data) => {
        console.log(data);
    }).catch((data) => {
        console.log(data)
    })

}