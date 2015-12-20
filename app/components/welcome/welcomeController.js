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
