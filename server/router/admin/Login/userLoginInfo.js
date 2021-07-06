module.exports = (req, res) => {
    if (req.session.username) {
        return res.json({
            //是否登陆过
            state: 1,
            username: req.session.username
        })
    }
    //没有登陆过
    res.json({
        state: 0
    })
}