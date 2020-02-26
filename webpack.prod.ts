/**
 * @Author: Tomonori
 * @Date: 2020/2/26 12:17
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import {Configuration} from "webpack";
import WebpackCommonConfig from "./webpack.config"
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";

const config: Configuration = {
  mode: "production",
  ...WebpackCommonConfig,
  //js压缩
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    usedExports: true,
    sideEffects: true
  },
  plugins: [
    new WebpackBar({
      name: 'red',
      color: '#FF4040'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), 'dist')]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash:7].css",
      chunkFilename: "css/[id]-[hash:7].css",
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|styl)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: '[name]-[hash:7].[ext]',
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name]-[hash:7].[ext]',
              outputPath: 'font'
            }
          }
        ]
      }
    ]
  }
};

export default config

