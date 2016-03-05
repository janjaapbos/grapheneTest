// webpack imports
var path = require('path')
var webpack = require('webpack');

// relevant project paths
var projectPaths = {
    sourceDir: path.join(__dirname, 'src'),
    rootDir: __dirname,
}

// export webpack configuration object
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'TestApp.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
		include: projectPaths.sourceDir,
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }, {
                test: /\.json$/,
                loaders: ['json'],
            }, {
                test: /\.(png|jpg|ttf)$/,
                loader: 'url',
                query: {limit: 10000000},
            }
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        root: [
            projectPaths.sourceDir,
            projectPaths.rootDir,
        ],
    },
}


// end of file
