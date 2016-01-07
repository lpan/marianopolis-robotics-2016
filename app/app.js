var app = angular.module('marioKart', ['ngAnimate', 'ngRoute', 'door3.css']);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
  // gotoPage() as a globally accesible function
  $rootScope.gotoPage = function (path) {
    $location.path(path);
  };
}]);
