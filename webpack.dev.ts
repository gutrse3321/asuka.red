/**
 * @Author: Tomonori
 * @Date: 2020/2/26 12:17
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import {Configuration, HotModuleReplacementPlugin} from "webpack";
import WebpackCommonConfig from "./webpack.config"
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

const PORT: number = 3000;

const config: Configuration = {
  ...WebpackCommonConfig,
  entry: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/main.tsx")
  ],
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    hot: true,
    open: false,
    contentBase: "./dist",
    publicPath: WebpackCommonConfig.output.publicPath,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    },
    https: false,
    overlay: true,
    port: PORT
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    }),
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "react-hot-loader/webpack"
          },
          {
            loader: "babel-loader",
            options: { cacheDirectory: true }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|styl)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|webp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "[name]-[hash:7].[ext]",
              publicPath: "img",
              outputPath: "img"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "[name]-[hash:7].[ext]",
              outputPath: "font",
              publicPath: "font"
            },
          }
        ]
      }
    ]
  }
};

export default config
