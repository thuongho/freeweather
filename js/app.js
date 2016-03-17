(function(){
  'use strict';

  var weatherApp = angular.module('app', []);

  weatherApp.config(function($routeProvider) {
  	$routeProvider
  		.when("/", {
  			templateUrl: "pages/main.html", 
  			controller: "MainCtrl"
  		})
  });
  weatherApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
  
})();