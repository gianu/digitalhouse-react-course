const webpack               = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const autoprefixer          = require('autoprefixer');

const webpackConfig = {
  entry: {
    app: './app/index.js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  output: {
    filename: 'app.bundle-[hash].js'
  },
  devtool: '#cheap-module-eval-source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.png$/, loader: 'file?mimetype=image/png' },
      // Treat node modules' css as global
      { test: /node_modules\/.*\.css$/, loaders: ['style', 'css'] },
      // The rest is local scoped css
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css', 'postcss'] },
      { test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'postcss', 'sass'] },
      {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[name].[ext]?mimetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      bricks: __dirname + '/../src',
      'style-guide': __dirname
    }
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.template.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    })
  ]
};

module.exports = webpackConfig;
