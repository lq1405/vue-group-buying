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
                    '/home/fineFood': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/home/fineFood': '/home/fineFood'
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