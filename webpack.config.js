const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const devtool = mode === 'development' ? 'eval-cheap-source-map' : false;
const stats = mode === 'development' ? 'errors-warnings' : { children: false };

module.exports = {
  mode: mode,
  devtool: devtool,
  entry: glob.sync('./js/**/*.js').reduce((acc, path) => {
    const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: './assets/bundle.[name].js',
    path: path.resolve(__dirname, './')
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'styles/'),
      Helpers: path.resolve(__dirname, 'styles/helpers/'),
      Components: path.resolve(__dirname, 'styles/components/'),
      Sections: path.resolve(__dirname, 'styles/sections/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/bundle.[name].css',
    })
  ],
  stats: stats,
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            }
          }
        ]
      }
    ]
  }
}