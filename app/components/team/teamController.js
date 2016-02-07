app.controller('teamController', ['$scope', 'languageService', function ($scope, language) {
  $scope.pageClass = 'page-team';
  var lang = language.lang.toString();
  $scope.startTitle = language.trans.nav[lang].TEAM;
}]);
