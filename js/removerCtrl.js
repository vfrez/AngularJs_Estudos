var remover = angular.module('ajax.remover',[]);

remover.controller('removerCtrl', function ($scope) {
	$scope.string;

	$scope.remover = function(){
		$scope.str = $scope.string.replace(/\s{1,}/g, '');
		// Dividindo a regex e replace em partes:

		// \s - qualquer espaço em branco
		// {2,} - em quantidade de dois ou mais
		// g - apanhar todas as ocorrências, não só a primeira
		// depois o replace faz a subsituição desses grupos de espaços pelo que fôr passado no segundo parâmetro. Neste caso um espaço simples , ' ');
	}

	var string2 = $scope.string2;
	$scope.str2;
	$scope.remover2 = function(string2){
		    $scope.str2 = $scope.string2.split(' ').join('');
		    if ($scope.str2.indexOf(' ') != -1) return remover2($scope.str2);
		    else return $scope.str2;
		    //split sepaga em array a estring "split('caracter separador' quantos arrays serão criados)" ex: split('a', 3)
			//join reagrupa o array separado em uma string unica "join('novo separador da estring')" ex: join('and')
			//indexOf busca um caracter especifico na string "indexOf("caracter a procurar", a partir de qual caracter da string irra procurar)" , ex: indexOf('T' 12)
	}

	var string3 = $scope.string3;
	$scope.str3;
	$scope.trocaChar = function (string3) {
	  $scope.str3 = string3;
		var mapaAcentosHex 	= {
			a : /[\xE0-\xE6]/g,
			e : /[\xE8-\xEB]/g,
			i : /[\xEC-\xEF]/g,
			o : /[\xF2-\xF6]/g,
			u : /[\xF9-\xFC]/g,
			c : /\xE7/g,
			n : /\xF1/g
		};

		for ( var letra in mapaAcentosHex ) {
			var expressaoRegular = mapaAcentosHex[letra];
			$scope.str3 = $scope.str3.replace( expressaoRegular, letra );
		} 
		//até aqui remove todos os acentos da palavra 
		// $scope.str3 = str3;
		console.log($scope.str3);
		return $scope.str3;
	}
	


});


