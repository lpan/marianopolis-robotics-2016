var app = angular.module('marioKart', ['ngAnimate', 'ngRoute']);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
  // set language
  $rootScope.setLang = function (language) {
    $rootScope.lang = language;
  };

  // gotoPage() as a globally accesible function
  $rootScope.gotoPage = function (path) {
    $location.path(path);
  };
}]);

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
    when('/school', {
      templateUrl: 'app/components/school/schoolView.html',
      controller: 'schoolController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
