/**
 * @Author: Tomonori
 * @Date: 2020/2/25 17:02
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/main.tsx",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "./dist")
  },
  stats: { children: false },
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src")
    },
    extensions: [".tsx", ".ts", ".js"]
  }
};

export default config;
