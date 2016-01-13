(function(){
	
var app = angular.module('bienal',[]);

		app.controller('PosterController',['$scope', '$http', function($scope, $http){
			$scope.posts = [];
			$http.get('./data.json')
				.success(function(data){
					$scope.posts = data;
				})

		setTimeout(function(){
			console.log($scope.posts.length)
		}, 3000)		


		}])


})();

