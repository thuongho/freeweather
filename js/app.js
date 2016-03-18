(function(){
  'use strict';

  var weatherApp = angular.module('app', ['ngRoute']);

  // ROUTING
  weatherApp.config(function($routeProvider) {
  	$routeProvider
  		.when("/", {
  			templateUrl: "pages/main.html", 
  			controller: "MainCtrl"
  		})
  });

  // SERVICES
  weatherApp.factory('WeatherAPI', ['$http', function ($http) {
    var getWeather = function() {

    };
  
    return {
      getWeather: getWeather
    };
  }]);

  // CONTROLLERS
  weatherApp.controller('MainCtrl', ['$scope', 'WeatherAPI', function($scope, WeatherAPI) {
  $scope.greeting = 'Hola!';
}]);
  
})();