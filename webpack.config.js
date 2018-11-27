module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true}],
              ["@babel/plugin-proposal-class-properties", { "loose": true}],
            ],
          }
        }
      }
    ]
  },
  devServer: {
    open: true,
  },
};
