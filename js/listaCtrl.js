var lista = angular.module('ajax.lista',[]);

lista.controller('listaCtrl', function ($scope, $location, $http) {
	$scope.testes = {
		teste1 : ["nome1", "nome2", "nome3"]

	}



	$scope.nome;
	$scope.filmes = new Object();



	// $http.get("http://www.omdbapi.com/?s=batman*&y=&plot=short&r=json")
	// 		.success(function(data){ //data é o resultado da requisição Json
	// 			$scope.filmes = data; 
	// 			console.log($scope.filmes);
	// 		})
	// 		.error(function(data){
	// 			alert("Error...");
	// 			console.log(data);
	// 		});

	



	$scope.search = function(){
	$http.get("http://www.omdbapi.com/?s=" + $scope.nome + "*&y=&plot=short&r=json&page=2")
			.success(function(data){ //data é o resultado da requisição Json
				$scope.filmes = data; 
				console.log($scope.filmes)	;
			})
			.error(function(data){
				alert("Error...");
				console.log(data);
			})

	}

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
  $('#modal1').openModal();
   $('#modal1').closeModal();



});

