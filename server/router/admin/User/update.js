//账号管理。修改账号和密码
let {
    db
} = require('../../tools')

module.exports = (req, res) => {
    console.log(req.session, req.body);
    let conditionObj = {
        username: req.session.username
    };
    db.collection('user').updateOne(conditionObj, req.body)
        .then(data => {
            delete req.session.username;
            res.json({
                state: 1,
                msg: data
            })
        }).catch(data => {
            res.json({
                state: 0,
                msg: data
            })
        })
}