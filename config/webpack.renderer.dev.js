const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",

  devtool: "inline-source-map",

  entry: "./src/renderer.js",

  stats: "errors-only",

  target: "electron-renderer",

  output: {
    path: path.resolve(__dirname, "target"),
    filename: "renderer.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
}
