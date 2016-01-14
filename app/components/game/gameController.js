app.controller('gameController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-game';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].GAME;
  };
  update();
}]);
