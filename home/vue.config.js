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
                    '/data/lovely': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/data/lovely': '/data/lovely'
                        }
                    },
                    'data/fineFood': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/data/fineFood': '/data/fineFood'
                        }
                    },
                    'data/detailMessage': {
                        target: 'http://localhost:3000/',
                        pathRewrite: {
                            '^/data/detailMessage': 'data/detailMessage'
                        }
                    },
                }
            }
        }
    }
}