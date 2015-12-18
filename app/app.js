var app = angular.module('marioKart', ['ngRoute']);

app.run(function ($rootScope) {
  // Default language is english
  $rootScope.lang = 'en';
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/views/welcome.html',
      controller: 'welcomeController'
    }).
    when('/test', {
      templateUrl: 'app/views/test.html',
    }).
    when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
