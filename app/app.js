var app = angular.module('marioKart', ['ngAnimate', 'ngRoute']);

app.run(function ($rootScope) {
  // Initialize global var lang
  $rootScope.lang = 'unset';
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/components/welcome/welcomeView.html',
      controller: 'welcomeController'
    }).
    when('/info', {
      templateUrl: 'app/components/info/infoView.html',
      controller: 'infoController'
    }).
    when('/team', {
      templateUrl: 'app/components/team/teamView.html',
      controller: 'teamController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
