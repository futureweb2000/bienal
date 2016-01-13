var app = require('express');

var server = app();

server.get('/', function (req,res){

	res.sendfile('index.html');
	res.sendfile('angular.min.js');

});

server.get('/angular', function (req,res){

	res.sendfile('angular.min.js');

})


server.listen(8080, function(){
	console.log('Escuchando en el puerto 8000')
})

