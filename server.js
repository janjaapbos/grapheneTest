var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const GRAPHQL_SERVER = '127.0.0.1';
const GRAPHQL_PORT = 5000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  proxy: {'/graphql': `http://${GRAPHQL_SERVER}:${GRAPHQL_PORT}`},
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
