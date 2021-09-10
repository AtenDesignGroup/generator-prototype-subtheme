var browserSync = require('browser-sync');
var path = require('path');

var themeDir = './';
var sourceDir = path.join(themeDir, '/src');
var buildDir = path.join(themeDir, '/build');
var incPaths = [
  './node_modules/breakpoint-sass/stylesheets',
  themeDir + '/partials',
];
// Default value.
// Override with the BS_PROXY environment variable
// in you .env file.
var host = 'local.test';

module.exports = {
  css: {
    inputs: [
      themeDir + 'components/**/*.{css,scss}',
      themeDir + 'libraries/**/*.{css,scss}',
      themeDir + 'partials/**/*.{css,scss}',
    ],
    output: buildDir,
    base: themeDir,
    options: {
      errLogToConsole: true,
      includePaths: incPaths,
      outputStyle: 'expanded',
    },
  },
  browserSync: {
    instance: browserSync.create(),
    proxy: process.env.BS_PROXY || host,
    files: [
      themeDir + '/**/*.theme',
      themeDir + '/**/*.twig',
      themeDir + '/**/*.php',
      themeDir + '/**/*.yml',
    ],
    reloadDebounce: 0,
    reloadDelay: 0,
    reloadThrottle: 0,
  },
  js: {
    inputs: [themeDir + 'components/*/*.js', themeDir + 'libraries/*/*.js'],
    output: buildDir,
    base: themeDir,
    commonDir: buildDir + '/libraries/global',
  },
  svg: {
    filesSource: sourceDir + '/img/svg',
    filesBuild: buildDir + '/img/svg',
  },
};
