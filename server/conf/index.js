module.exports = {
    //http的端口号
    HTTP_PORT: 3000,
    //根目录
    ROOT: process.cwd(),
    //静态化配置
    STATICS: {
        '/static/': '/static/',
        '/favicon.io': '/data/home/favicon.io',
        '/home': '/static/home/home',
        '/cache': '/cache'
    },
    //数据库相关信息
    MONGO: {
        connectUrl: 'mongodb://localhost:27017',
        dataBaseName: 'groupBuying',
    },

    //缓存目录
    IMG_CACHE_DIR: '/cache/upload/',

    //图片存储转到的目录
    IMG_SAVE_DIR: '/static/data/img/upload/',

    //图标保存目录
    ICONS_SAVE_DIR: '/static/data/img/icons/',


    //定义错误
    ERROR: {
        'userOrPasswordErr': '账号或密码错误!!!',
        'userHasOwn': '账号已经存在!!!',
        'insertDatabaseErr': '插入数据失败!!!',
        'updatePasswdErr': '密码重置失败!!!',
        'updateLimitErr': '权限修改失败!!!',
        'deleteUserErr': '用户删除失败!!!',
        'deleteNewsErr': '新闻删除失败!!!',
        'oldPasswdErr': '原密码错误!!!',
        'changePasswdErr': '密码修改失败!!!',
        'changeNewsErr': '新闻修改失败!!!',
        'dataSelectErr': '数据查询失败!!!',
        'updateErr': '数据更新失败!!!',
        'dataBaseError': '数据库错误!!!',
        'imgCacheError': {
            errno: 1,
            msg: '图片上传失败'
        },
        imgResaveError: {
            errno: 2,
            msg: '图片上传失败'
        },
        createProductError: {
            errno: 3,
            msg: "商品创建失败"
        }
    },
}