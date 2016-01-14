app.controller('schoolController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-school';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].SCHOOL;
  };
  update();
}]);
