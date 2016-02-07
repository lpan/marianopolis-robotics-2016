app.controller('schoolController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-school';
  // translation
  var lang = language.lang.toString();
  $scope.startTitle = language.trans.nav[lang].SCHOOL;
  $scope.lines = language.trans.school[lang].text;
}]);
