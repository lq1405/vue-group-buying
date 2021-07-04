//开发时的配置
let path = require('path');
let root = process.cwd();
let {
    VueLoaderPlugin
} = require('vue-loader');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //模式
    mode: 'development',

    entry: './src/main.js',

    output: {
        path: path.join(root, '../server'),
        filename: 'static/admin/js/[name].js',
        //静态资源相对位置
        publicPath: '/'
    },
    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.js',
            "@": path.join(root, 'src'),
            "@v": path.join(root, 'src/views'),
            "@c": path.join(root, 'src/components'),
            "@t": path.join(root, 'src/tools'),
        },
        extensions: ['.vue', '.js']
    },
    //模块
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'views/admin.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'static/admin/css/[name].css'
        })
    ],
    optimization: {
        //拆分库文件
        splitChunks: {
            minChunks: 30,
            //分组
            cacheGroups: {
                //发布文件
                default: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2, //模块被引用2次以上的才抽离
                    priority: -20
                },
                vendors: { //拆分第三方库（通过npm|yarn安装的库）
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10
                }
            }
        }
    }

}