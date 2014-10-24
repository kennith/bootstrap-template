var gulp 				=	require('gulp'),
		less 				= require('gulp-less'),
		livereload 	=	require('gulp-livereload');

gulp.task('watch', ['less'], function() {
  livereload.listen();
  gulp.watch(['*.html', 'less/**'], ['less'])
  	.on('change', livereload.changed);
});

gulp.task('less', function() {
  gulp.src('less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('css/'));
});