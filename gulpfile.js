var gulp = require('gulp'),
 	sass = require('gulp-sass');

// gulp.task('mytask', function(done){
// 	console.log('hi');
// 	done();
// });

gulp.task('sass', function(){
	return gulp.src('app/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
	gulp.watch('app/sass/*.sass', gulp.series('sass'));
});