const path = require('path');

module.exports = {
	mode: 'development',
<<<<<<< HEAD
	devtool: 'inline-source-map',
=======
>>>>>>> fbf7ab42d005ec5a21cbf6c87dcc3733d1bdb245
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};