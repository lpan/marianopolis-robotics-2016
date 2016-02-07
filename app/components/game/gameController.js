app.controller('gameController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-game';
  // translation
  var lang = language.lang.toString();
  $scope.startTitle = language.trans.nav[lang].GAME;
  $scope.text = language.trans.game[lang].text;
  $scope.videoUrl = 'https://www.youtube.com/watch?v=X2KPVj53-yI';
}]);
