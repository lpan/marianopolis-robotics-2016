app.controller('teamController', ['$scope', 'languageService', function ($scope, language) {
  $scope.pageClass = 'page-team';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].TEAM;
  };
  update();
}]);
