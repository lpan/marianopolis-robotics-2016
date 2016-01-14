app.controller('journalController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-journal';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].JOURNAL;
  };
  update();
}]);
