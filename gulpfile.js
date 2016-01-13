var gulp = require('gulp');
var webServer = require('gulp-webserver');


gulp.task('server', function(){
	// la carpeta que va a servir
	gulp.src('./app')
		.pipe(webServer({
			host: '0.0.0.0',
			port: '8989',
			livereload: true
		})) //le anadimos la configuracion 

});