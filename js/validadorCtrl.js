var valida = angular.module('ajax.validador',[]);

valida.controller('validadorCtrl', function ($scope) {
	 $scope.submitForm = function() {

            // verifica se o formulário é válido
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };

});