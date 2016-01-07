app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/components/welcome/welcomeView.html',
      controller: 'welcomeController',
      css: ['assets/css/main.css', 'assets/css/welcome/index.css']
    }).
    when('/info', {
      templateUrl: 'app/components/info/infoView.html',
      controller: 'infoController',
      css: ['assets/css/main.css']
    }).
    when('/team', {
      templateUrl: 'app/components/team/teamView.html',
      controller: 'teamController',
      css: ['assets/css/main.css']
    }).
    when('/school', {
      templateUrl: 'app/components/school/schoolView.html',
      controller: 'schoolController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
