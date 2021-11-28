const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htnlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

exports.html = html
exports.scss = scss
