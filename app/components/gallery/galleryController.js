app.controller('galleryController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-gallery';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].GALLERY;
  };
  update();
  $scope.$broadcast('pageName', $scope.pageName);
}]);
