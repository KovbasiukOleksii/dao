const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');


gulp.task('sass', () => {
   return gulp.src('./catalog_plant/ecuador/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: ''}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./catalog_plant/ecuador/css'));
});
gulp.task('watch', () => {
    gulp.watch('./catalog_plant/ecuador/css/*.scss', gulp.series('sass'))
});