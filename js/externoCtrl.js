var externo = angular.module('ajax.externo', []);

externo.controller('externoCtrl', function($scope, $http) {

    /*==============Function para Remover acentos e espaços==============*/
    // function para remover acentos e espaços da palavra
    function removerAcentos(newStringComAcento) {
        var string = newStringComAcento;
        var mapaAcentosHex = {
            a: /[\xE0-\xE6]/g,
            e: /[\xE8-\xEB]/g,
            i: /[\xEC-\xEF]/g,
            o: /[\xF2-\xF6]/g,
            u: /[\xF9-\xFC]/g,
            c: /\xE7/g,
            n: /\xF1/g
        };
        for (var letra in mapaAcentosHex) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace(expressaoRegular, letra);
        }
        //até aqui remove todos os acentos da palavra

        //a linha abaixo remove o espaço da palavra e o substitui por "-"
        str = string.replace(/\s{1,}/g, '-');
        return str;
    }

    /*==============Buscar Estados vindos do Objeto contido no arquivo Json==============*/
    //$http.get busca informações da URL(objetos vindos de Json ou HTML)
    $http.get("https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json")
        .success(function(data) {
            $scope.estados = data;
            console.log($scope.estados);
        })
        .error(function(data) {
            atert("Erro");
            console.log(data);
        });


    /*==============Function para buscar as cidades relacionadas com o estado correto==============*/
    function getCidadesById(_id) {
        //$http.get busca informações da URL(objetos vindos de Json ou HTML)
        $http.get("https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json")
            .success(function(data) {
                $scope.cidades = [];
                //loop para percorre todo o objeto trazido, logo após verificando no IF se o que veio é igual ao ID selecionado no estado, simulando assim um relacionamento entre o compo 'ID' vindo do estado e o campo 'Estado' vindo da cidade
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Estado == _id) {
                        //O comando push, é como uma function para adicionar uma linha em um array determinado 
                        $scope.cidades.push(data[i]);
                    }
                }
            })
            .error(function(data) {
                console.log(data);
            });
    }

    /*==============Function para filtrar as cidades de acordo com o estado selecionado ==============*/
    $scope.cidadeSelecionada = {};
    $scope.filtrarCidades = function(estado) {
        //O comando 'JSON.parse(estado)' é uma função para converter String para Json
        estado = JSON.parse(estado);
        getCidadesById(estado.ID);
    }


    /*==============teste funcionalidade (pegando resultado do option)==============*/
    $scope.teste = function() {
        teste1 = JSON.parse($scope.estadoSelecionado);
        teste2 = JSON.parse($scope.cidadeSelecionada);
        console.log(teste1);
        console.log(teste2);
    }



    /*==============Function para buscar o clima==============*/
    // ta um lixo, arumar quando melhorar as abilidades
    $scope.buscar = function() {
        if (!$scope.estadoSelecionado) {
            alert('Selecione um estado e cidade');
        } else {

            estado = JSON.parse($scope.estadoSelecionado);
            cidade = JSON.parse($scope.cidadeSelecionada);

            estado = removerAcentos(estado.Sigla);
            cidade = removerAcentos(cidade.Nome);
            console.log(cidade);
            console.log(estado);

            $scope.estado = "pr";

            //$http.get busca informações da URL(objetos vindos de Json ou HTML)
            //o mesmo está fazenndo uma requisição e aplicando na URL a cidade selecionada pelo Usuario
            $http.get("http://developers.agenciaideias.com.br/tempo/json/" + cidade + "-" + estado)
                .success(function(data) { //data é o resultado da requisição Json
                    $scope.tempo = data;
                    console.log($scope.tempo);
                })
                //tentativa de não retornar um erro vazio na requisição, reaplicando o http.get com um modo que não retorna erros,mas sim a temperadura média do etado (necessita de melhora no código)
                .error(function(data) {
                    //alert("Error...");
                    cidade = cidade.replace(/-{1,}/g, ' '); //reaplica a alteração anteria removendo o traço adicionado recolocando o espaço
                    $http.get("http://developers.agenciaideias.com.br/tempo/json/" + cidade + "-" + estado)
                        .success(function(data) { //data é o resultado da requisição Json
                            $scope.tempo = data;
                            console.log($scope.tempo);

                        })
                        .error(function(data) {
                            console.log(cidadeErr);
                            console.log(estado);
                            console.log(data);
                            alert('Cidade não encontrada, Busque outra');
                        });

                });
        }


    }
});