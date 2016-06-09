var gulp = require('gulp');
var tsc = require('gulp-typescript');

gulp.task('default', ['typescripts']);

gulp.task('typescripts', function() {
    var tsProject = tsc.createProject('tsconfig.json');
    return gulp.src('./src/ts/**/*.ts')
        .pipe(tsc(tsProject))
        .pipe(gulp.dest('./src/js'));
});