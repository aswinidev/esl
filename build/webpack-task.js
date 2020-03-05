const path = require('path');
const gulp = require('gulp');

const named = require('vinyl-named');
const webpackStream = require('webpack-stream');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const TS_LINT = path.join(__dirname, '../tslint.json');
const TS_CONFIG = path.join(__dirname, '../tsconfig.json');

module.exports.buildAll = function tsBuildAll(config) {
	config = Object.assign({
		dev: false
	}, config);

	const webpackConfig = Object({
		context: config.content,
		output: Object.assign({
			sourceMapFilename: '[name].js.map',
			filename: '[name].js'
		}, config.output),
		watch: false,
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.ts?$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
					options: {
						configFile: TS_CONFIG,
						reportFiles: [
							'src/**/*.{ts,tsx}'
						],
						// disable type checker - we will use it in fork plugin
						transpileOnly: true
					}
				}
			]
		},
		resolve: {
			// Should be both: 'ts' for source, 'js' for referenced libs
			extensions: ['.ts', '.js'],
			plugins: [new TsconfigPathsPlugin({ configFile: TS_CONFIG })]
		},
		mode: 'production',
		plugins: [
			new ForkTsCheckerWebpackPlugin({
				tslint: TS_LINT,
				tsconfig: TS_CONFIG,
				reportFiles: [
					'src/**/*.{ts,tsx}'
				]
			})
		]
	});
	return gulp.src(config.src)
		.pipe(named(config.nameFunction))
		.pipe(webpackStream(webpackConfig));
};
