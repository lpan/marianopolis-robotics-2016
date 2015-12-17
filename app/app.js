var app = angular.module('marioKart', ['ngRoute']);

app.run(function ($rootScope) {
  // Default language is english
  $rootScope.lang = 'en';
  $rootScope.setLang = function (lang) {
    $rootScope.lang = lang;
  };
});

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

//app.controller('welcomeController', function ($rootScope, $scope) {

