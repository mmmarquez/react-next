const webpack = require('webpack');
require('dotenv').config();

module.exports = {
	webpack: config => {
		config.plugins.push(
			new webpack.EnvironmentPlugin([
				'CTF_CDA_ACCESS_TOKEN',
				'CTF_SPACE_ID',
				'CTF_BLOG_POST_TYPE_ID'
			])
		);
		config.module.rules.push(
			{
				test: /\.css/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader']
			}
		);
		return config;
	}
};
