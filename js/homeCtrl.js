var home = angular.module('ajax.home',[]);

	home.controller('HomeCtrl', function ($scope,$location) {
		$scope.local = function(){
			$location.path('/local');
		}
		$scope.externo = function(){
			$location.path("/externo");
		}  
		$scope.remover = function(){
			$location.path("/remover");
		}
		$scope.validar = function(){
			$location.path("/validador");
		}
		$scope.lista = function(){
			$location.path("/lista");
		}
});
