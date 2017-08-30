var gulp = require('gulp');
var bs = require('browser-sync');
 
// this is just to run a localhost server for angular app
gulp.task('run', function(){
	bs.init(null,{
		open:true,
		server:{
			baseDir: 'src'
		}

	});
})

