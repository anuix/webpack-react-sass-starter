const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/js/App.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
       // Apply rule for .sass, .scss or .css files
       test: /\.(sa|sc|c)ss$/,

       // Set loaders to transform files.
       // Loaders are applying from right to left(!)
       // The first loader will be applied after others
       use: [
              {
                // After all CSS loaders we use plugin to do his work.
                // It gets all transformed CSS and extracts it into separate
                // single bundled file
                loader: MiniCssExtractPlugin.loader
              },
              {
                // This loader resolves url() and @imports inside CSS
                loader: "css-loader",
              },
              {
                // Then we apply postCSS fixes like autoprefixer and minifying
                loader: "postcss-loader"
              },
              {
                // First we transform SASS to standard CSS
                loader: "sass-loader",
                options: {
                  implementation: require("sass")
                }
              }
            ]
          }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'app.min.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
       filename: "app.min.css"
    })
  ],

  mode: 'development'
};
