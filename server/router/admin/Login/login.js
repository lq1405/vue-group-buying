// let findOne = require('../../dataBase/findOne');

let {
    db
} = require('../../tools')

module.exports = (req, res) => {
    db.collection('user').findOne(req.body).then((data) => {
        //找到数据了
        //在session中记录登陆的信息
        req.session.username = data[0].username;
        //返回结果
        res.json({
            state: 1,
            username: data[0].username
        })
    }).catch((data) => {
        res.json({
            state: 0,
            msg: data
        })
    })

}