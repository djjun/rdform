/**
 * Created by Djeison Hart on 12/02/2016.
 * Alpha
 */

// including plugins
var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

// build JS
gulp.task('buildjs', function () {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});