/**
 * date: 2021-02-04
 * author: cici
 * webpack5
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    publicPath: "/assets/",
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime']
        },
      },
      { 
        test: /\.(css|less)$/, 
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader', 
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                // localIdentHashPrefix: "hash",
                exportLocalsConvention: "camelCase",
              },
            }
          },
          'less-loader'
        ],
      }
    ],
  },
  plugins: [
    // 清除打包文件夹
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
      // filename: '[name].css',
      // chunkFilename: '[id].[contenthash:8].css',
    // }),
  ],
};
