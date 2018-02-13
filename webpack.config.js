const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-regenerator-runtime', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/')],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('development'),
          WEBPACK: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devtool: 'source-map'
};