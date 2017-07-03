const path = require('path');
const webpack = require('webpack');
const ejs = require('ejs')

module.exports = {
  context: __dirname,
  devtool: 'source-map', 
  entry: {
    app: './src/index.js',
  },
  output:  {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: 'public',
    port: 5009,
    watchContentBase: true,
    // hot: true,
    setup(app) {
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public/index.html'));
      });
    }
  },
  module: {
    rules: [
      //js, jsx
      { 
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        // babelrc handles the options/presets/plugins
        loader: require.resolve('babel-loader')
      }
    ]
  },
  plugins: [
    //code split anything that comes from /node_modules/ to vendor.bundle.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    // use this when it's time for hashing and caching
    // https://webpack.js.org/guides/code-splitting-libraries/
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // })
  ]
}