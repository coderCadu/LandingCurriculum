const {
  src,
  dest,
  series,
  parallel,
  task,
  watch,
} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

function js() {
  return src('src/assets/js/**/*.js')
    .pipe(babel({ comments: false, presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(dest('docs/assets/js'));
}

function html() {
  return src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('docs'));
}

function css() {
  return src('src/assets/css/**/*.css')
    .pipe(uglifycss())
    .pipe(concat('styles.min.css'))
    .pipe(dest('docs/assets/css'));
}

function scss() {
  return src('src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('src/assets/css'));
}

function img() {
  return src('src/assets/img/**/*.*')
    .pipe(dest('docs/assets/img'));
}

function watchFiles(callback) {
  watch('src/assets/css/**/*.css', css);
  watch('src/assets/js/**/*.js', js);
  watch('src/assets/img/**/*.*', img);
  watch('src/', html);
  callback();
}

task('html', html);
task('css', series(scss, css));
task('js', js);
task('img', img);
task('watch', watchFiles);
task('default', parallel(html, js, img, series(scss, css)));
