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
      css: ['assets/css/main.css', 'assets/css/info/talk-mushroom.css']
    }).
    when('/team', {
      templateUrl: 'app/components/team/teamView.html',
      controller: 'teamController',
      css: ['assets/css/main.css', 'assets/css/team/index.css']
    }).
    when('/school', {
      templateUrl: 'app/components/school/schoolView.html',
      controller: 'schoolController',
      css: ['assets/css/main.css', 'assets/css/school/index.css']
    }).
    when('/game', {
      templateUrl: 'app/components/game/gameView.html',
      controller: 'gameController',
      css: ['assets/css/main.css', "assets/css/school/index.css"]
    }).
    when('/gallery', {
      templateUrl: 'app/components/gallery/galleryView.html',
      controller: 'galleryController',
      css: ['assets/css/main.css']
    }).
    when('/tutorials', {
      templateUrl: 'app/components/tutorials/tutorialsView.html',
      controller: 'tutorialsController',
      css: ['assets/css/main.css', 'assets/css/tutorials/index.css']
    }).
    when('/journal', {
      templateUrl: 'app/components/journal/journalView.html',
      controller: 'journalController',
      css: ['assets/css/main.css', 'assets/css/journal/index.css']
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
