/**
 * @Author: Tomonori
 * @Date: 2020/2/25 17:02
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from "clean-webpack-plugin";

const config: webpack.Configuration = {
  entry: './src/main.tsx',
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  stats: { children: false },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

export default config;
