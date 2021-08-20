const path = require("path");

module.exports = {
  entry: path.join(__dirname, "resources/js/index.js"),
  output: {
    path: path.join(__dirname, "public/dist/js"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx{0,1}$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  }
};