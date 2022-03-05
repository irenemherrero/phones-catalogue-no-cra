const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsRules = {
  test: /\.(js|jsx)$/, // con este loader, ahora babel se encarga de gestionar los ficheros js y jsx. La configuración de babel está en .babelrc.json
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  }
}

const assetsRules = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}

module.exports = (env, { mode }) => ({
  output: {
    filename: 'bundle.[contenthash].js'
  },
  module: {
    rules: [jsRules, assetsRules]
  },
  resolve: { extensions: [".js", ".jsx"] },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'GS Phones',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: 'body'
    }),
    // new Dotenv(),
  ],
});
