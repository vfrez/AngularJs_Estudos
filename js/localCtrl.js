var home = angular.module('ajax.local',[]);

home.controller('localCtrl', function ($scope, $http) {
  	console.clear();
  	$scope.fruits = Array();
	console.log($scope.fruits);

	
		$http.get("list.html")
			.success(function(data){
				$scope.fruits = data.fruits; 
				console.log($scope.fruits);
			})
			.error(function(data){
				alert("Error...");
				console.log(data);
			});
	

  
});
