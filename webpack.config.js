const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  console.log('WEBPACK ENV', process.env.NODE_ENV)
  const IS_PROD = process.env.NODE_ENV === 'production';
  return {
    context: __dirname,
    devtool: IS_PROD ? "source-map" : 'cheap-eval-souce-map',
    entry: {
      app: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "[name].bundle.js"
    },
    devServer: {
      // contentBase: 'public',
      port: 5009,
      // watchContentBase: true,
      publicPath: "/public/",
      historyApiFallback: true,
      hot: true,
      setup(app) {
        app.get('/', (req, res) => {
          const indexPath = path.join(process.cwd(), '/public/index.html')
          console.log('index ~>', indexPath)
          res.sendFile(indexPath);
        });
      }
    },
    resolve: {
      // when leaving off filepath doing an import, try these filetypes in order import App from './App'
      extensions: [".js", ".jsx", ".json"]
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    module: {
      rules: [
        //js, jsx
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [path.resolve(__dirname, "node_modules")],
          // babelrc handles the options/presets/plugins
          loader: require.resolve("babel-loader")
        }
      ]
    },
    plugins: [
      //code split anything that comes from /node_modules/ to vendor.bundle.js
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function (module) {
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      // use this when it's time for hashing and caching
      // https://webpack.js.org/guides/code-splitting-libraries/
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'manifest'
      // }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};
