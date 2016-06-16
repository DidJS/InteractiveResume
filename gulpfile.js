var gulp = require('gulp');
var tsc = require('gulp-typescript');
var clean = require('gulp-clean');

gulp.task('default', ['clean', 'typescripts']);

gulp.task('typescripts', function() {
    var tsProject = tsc.createProject('tsconfig.json');
    return gulp.src('./src/ts/**/*.ts')
        .pipe(tsc(tsProject))
        .pipe(gulp.dest('./src/js'));
});

gulp.task('clean', function() {
    return gulp.src('./src/js', {read: false})
               .pipe(clean());
});