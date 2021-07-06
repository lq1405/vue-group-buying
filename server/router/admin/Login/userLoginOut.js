//退出登陆
module.exports = (req, res) => {
    //删除session中的username字段
    delete req.session.username;
    //页面重定向
    res.redirect('/admin')
}