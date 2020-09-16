const chalk = require('chalk')
const webpack = require('webpack')
const rm = require('rimraf')
const path = require('path')
const webpackConfig = require('./webpack.config.js')
rm(path.resolve(__dirname, '../dist'), err => {
    if (!err) {
        webpack(webpackConfig, (err, stats) => {
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            if (stats.hasErrors()) {
                console.log(chalk.red('构建错误！\n'))
                process.exit(1)
            }
            console.log(chalk.cyan('构建成功！\n'))
        })
    }
    else {
        console.log(err)
    }
})
