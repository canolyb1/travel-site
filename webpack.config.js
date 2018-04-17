const path = require('path');

process.env.NODE_ENV = 'development';

const config = {
  entry: {
    App: './app/assets/scripts/App.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/,   
        use: [{
          loader: 'babel-loader',
          options: { 
            presets: ['env'] }
        }]
      }
    ]
  }
}

module.exports = config;