const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');


gulp.task('sass', () => {
   return gulp.src('./catalog_flower/rose_red/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: ''}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./catalog_flower/rose_red/css'));
});
gulp.task('watch', () => {
    gulp.watch('./catalog_flower/rose_red/css/*.scss', gulp.series('sass'))
});