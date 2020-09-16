const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const getComponentEntries = require('./utils.js')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const config = {
    mode: "production",
    entry: {
        // ...getComponentEntries('src/components'),
        'arg-conponent': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "../dist"), //输出路径dist目录
        filename: "argace-components.min.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    externals: {
        //删除不需要打包到组件库的依赖,由用户自己提供
        vue: "vue",
        "view-design": "view-design",
        "better-scroll": "better-scroll"
    },
    resolve: {
        extensions: ['.js', '.vue', '.less'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}


module.exports = config