/**
 * @Author: Tomonori
 * @Date: 2020/2/25 17:02
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/main.ts',
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
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
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|webp)$/,
        use: [
            'url-loader?limit=30000'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

export default config;
