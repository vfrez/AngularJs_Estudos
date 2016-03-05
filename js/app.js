var app = angular.module('ajax', [
  'ngRoute' , 
  'ajax.home' ,
  'ajax.local' ,
  'ajax.externo',
  'ajax.remover',
  'ajax.validador',
  'ajax.lista'
 
]);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      controller: "HomeCtrl",
      templateUrl: "views/home.html"
    })
    .when('/local', {
      controller: "localCtrl",
      templateUrl: "views/local.html"
    })
    .when('/externo', {
      controller: "externoCtrl",
      templateUrl: "views/externo.html"
    })
    .when('/remover', {
      controller: "removerCtrl",
      templateUrl: "views/remover.html"
    })
    .when('/validador', {
      controller: "validadorCtrl",
      templateUrl: "views/validador.html"
    })
    .when('/lista', {
      controller: "listaCtrl",
      templateUrl: "views/lista.html"
    })
    .otherwise('/home');
  $httpProvider.interceptors.push('sessionInjector')
});

app.factory('sessionInjector', function () {
  return{

  }
});
