const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // エントリポイント
  entry: './src/index.tsx',
  // 出力先設定
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // import時に読み込むファイルの拡張子指定(importの際に拡張子を省略可能になる)
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // tsファイルを変換できるようにする
      // ts用の設定
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // css用の設定
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpe?g|webp|svg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // HTMLファイル出力設定
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
