if (process.env.NODE_ENV === 'production') {
    //发布环境
    module.exports = {
        outputDir: '../server/static/home',
        indexPath: '../../views/home.html',
        publicPath: '/static/home/'
    }
} else {
    //开发环境
    module.exports = {
        configureWebpack: {
            devServer: {
                proxy: {
                    '/home/lovely': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/home/lovely': '/home/lovely'
                        }
                    },
                    '/home/icons': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/home/icons': '/home/icons'
                        }
                    },
                    '/home/getFoodList': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/home/getFoodList': '/home/getFoodList'
                        }
                    },
                    '/home/detailMessage': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/home/detailMessage': '/home/detailMessage'
                        }
                    },
                    '/static': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/static': '/static'
                        }
                    },
                }
            }
        }
    }
}