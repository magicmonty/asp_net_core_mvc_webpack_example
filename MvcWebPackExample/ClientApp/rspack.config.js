/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (_, argv) => {
  const isDev = argv.mode !== 'production';

  return {
    mode: isDev ? 'development' : 'production',
    entry: {
      site: './ts/site.ts',
      bootstrap_js: './ts/bootstrap_js.ts',
      validation: './ts/validation.ts',
      index: './ts/index.ts',
    },
    context: path.resolve(__dirname),
    output: {
      library: {
        name: 'app',
        type: 'var',
      },
      filename: '[name].min.js',
      path: path.resolve(__dirname, '..', 'wwwroot', 'dist'),
    },
    devtool: 'source-map',
    builtins: {
      progress: isDev,
    },
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: {
                    cssnano: {},
                    autoprefixer: {},
                  },
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          type: 'css',
        },
        {
          test: /\.(eot|woff(2)?|ttf|otf|svg|png|jpg)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
      extensions: ['.ts', '.js', '.scss', '.sass'],
    },
  };
};
