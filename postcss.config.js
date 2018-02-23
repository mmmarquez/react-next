module.exports = {
	plugins: [
		require('tailwindcss')(),
		require('autoprefixer')({
			browsers: [
				'> 1%',
				'last 4 versions',
				'firefox >= 4',
				'safari 7',
				'safari 8',
				'IE 8',
				'IE 9',
				'IE 10',
				'IE 11'
			]
		})
	]
};
