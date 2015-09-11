"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); // Transforms react JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with gulp
var concat = require('gulp-concat'); // concats css files
var lint = require('gulp-eslint'); // lintfree JS and JSX files

var config = {
  port: 9000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    images: './src/images/*',
    js: './src/**/*.js',
    mainJs: './src/main.js'
  }
}

// start a local devlopment server

gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function () {
  gulp.src('/dist/index.html')
    .pipe(open('', { uri: config.devBaseUrl + ':' + config.port + '/' }))
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + "/scripts"))
    .pipe(connect.reload())
})

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + "/css"))
    .pipe(connect.reload())
});


gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + "/images"))
    .pipe(connect.reload())
  // Publish Favicon
  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
});

gulp.task('lint', function () {
  return gulp.src(config.paths.js)
    .pipe(lint({ config: 'eslint.config.json' }))
    .pipe(lint.format())
})

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.mainJs, ['js']);
  gulp.watch(config.paths.css, ['css'])
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
