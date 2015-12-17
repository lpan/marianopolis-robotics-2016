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
    when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

app.controller('welcomeController', function ($rootScope, $scope, $location) {
  $scope.setLang = function (lang) {
    $rootScope.lang = lang;
  };
  $scope.gotoPage = function (path) {
    $location.path(path);
  };
  $rootScope.$watch('lang', function () {
    $scope.START = $rootScope.lang === 'en' ? 'Start' : 'Commencer';
  });
});
