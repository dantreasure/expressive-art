var expressive = angular.module('expressive', ['ngRoute']);

expressive.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      }).
      when('/remote-control',{
        templateUrl: 'views/remote-control.html',
        controller: 'MainCtrl'
      }).
      when('/presentation',{
        templateUrl: 'views/presentation.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }]);


expressive.controller( 'MainCtrl', function( $scope) {
  console.log("hello from the main ctrl");

});
