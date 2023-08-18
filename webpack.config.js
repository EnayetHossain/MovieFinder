const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: '[name][ext]'
  },

  devServer: {
    static: {
        directory: path.resolve(__dirname, "dist")
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"],
            },
        },
      },

      {
        test: /\.(png|jpg|jpeg|svg|pdf|gif)$/i,
        // type: "asset/resource"
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // Set the output directory
            },
          },
        ]
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
        title: "Movie Finder",
        filename: "index.html",
        template: "src/index.html"
    })
  ],

};
