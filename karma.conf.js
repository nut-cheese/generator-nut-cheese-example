module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'test.webpack.js'      
    ],

    exclude: [
      '**/*.swp',
      'src/router.config.js'
    ],

    preprocessors: {
      'test.webpack.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [{
          test: /\.jsx?$/,
          use: {
            loader: 'istanbul-instrumenter-loader',
            options: { esModules: true }
          },
          enforce: 'post',
          exclude: /node_modules/,
        }, {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['transform-runtime']
            },
          },
          exclude: /(node_modules|bower_components)/,
        }, {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: true,
                sourceMap: true,
                localIdentName: '[name]-[local]-[hash:base64:5]',
              }
            },
            'postcss-loader',
            'sass-loader',
          ],
        }]
      },
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['mocha', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DISABLE,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    coverageReporter: {
      reporters:[
        { type: 'html', dir: 'coverage/' },
      ],
    }
  });
};
