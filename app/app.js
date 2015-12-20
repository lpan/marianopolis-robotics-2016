var app = angular.module('marioKart', ['ngRoute']);

app.run(function ($rootScope) {
  // Initialize global var lang
  $rootScope.lang = 'unset';
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/components/welcome/welcome.html',
      controller: 'welcomeController'
    }).
    when('/test', {
      templateUrl: 'app/components/test/test.html'
    }).
    when('/home', {
      templateUrl: 'app/components/home/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
