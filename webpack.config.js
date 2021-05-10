const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    polyfill: 'babel-polyfill',
    app: './index.js',
    style: './style/index.sass',
  },
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.sass$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  }
}
