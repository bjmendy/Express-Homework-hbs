//I can't get the gulp file to put style into anything!!! it keeps saying
//throw new Error('Task '+name+' requires a function that is a function'); so I don't know what to do now :( //)


var gulp = require('gulp'); //uses a library instead of running everything ourselves
var less = require('gulp-less');
var watch =  require('gulp-watch');

//watch task listen for saves on a specific file, then runs the task you want
gulp.task('watch', function(){
	//first argument is an array of files
	//second argument is an array of tasks to run
	gulp.watch(['./styles/*.less'], ['compile-less'])
	// * is telling gulp to watch every file
	//in the folder with an extension of .less
})

gulp.task('compile-less', function(){
	gulp.src('./styles/styles.less') //grabbing a file
	.pipe(less())//goes into a pipe and converts less to css!!!!!//
	.pipe(gulp.dest('./styles/'))//now you want to put it into another pipe and into another file DESTination
	//sending it somewhere
})

//./ starts you at the same level, .. brings you back to the previous file area

//DEFAULT TASK!!!//
gulp.task('default', ['compile-less'], ['./styles/*.less']) // <---- this is an array of tasks to be run (second arg), default name