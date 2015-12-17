var app = angular.module('marioKart', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/views/welcome.html',
      controller: 'welcomeController'
    }).
    when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
