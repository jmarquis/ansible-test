module.exports = function (config) {

	config.set({

		basePath: "../..",

		frameworks: ["jasmine"],

		files: [
			"build/scripts/app.js",
			"bower_components/angular-mocks/angular-mocks.js",
			"test/unit/tests/**/*.js"
		],

		reporters: ["progress"],

		port: 9876,

		autoWatch: true,

		browsers: ["PhantomJS"],

		singleRun: false

	});

};
