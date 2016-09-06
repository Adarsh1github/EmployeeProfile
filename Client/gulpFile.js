var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./src/js/Main.js') //upload all the data once into server
        .transform('reactify')
        .bundle()
        .pipe(source('Main.js')) //pipe-->reads from source and writes into destination
        .pipe(gulp.dest('dist/js')) //we don't need to create this folder gulp will auto create this
});
//Then we create copy task
gulp.task('copy',function(){ //copying to destination
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendor/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['browserify','copy'],function(){

    return gulp.watch('src/**/*.*',['browserify','copy']);
});
