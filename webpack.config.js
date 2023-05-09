const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const mode = env.production ? 'production' : 'development';
  const devMode = mode === 'development';
  const target = devMode ? 'web' : 'browserslist';
  const devtool = devMode ? 'source-map' : undefined;

  const PATHS = {
    src: path.resolve(__dirname, 'src'),
    indexJs: path.resolve(__dirname, 'src', 'index.js'),
    indexHTML: path.resolve(__dirname, 'src', 'index.html'),
    dist: path.resolve(__dirname, 'dist'),
    assets: 'assets/',
  };

  const cssLoaders = [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
  ];

  const webpack = {
    entry: {
      babel: '@babel/polyfill',
      index: PATHS.indexJs,
    },
    devtool,
    target,
    mode,
    devServer: {
      open: true,
      port: 3000,
    },
    output: {
      path: PATHS.dist,
      filename: 'js/[name]-[contenthash].js',
      clean: true,
      assetModuleFilename: 'assets/[hash][ext]',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name]-[hash].css',
        runtime: true,
      }),
      new HtmlWebpackPlugin({
        template: PATHS.indexHTML,
        minify: false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
  return webpack;
};
