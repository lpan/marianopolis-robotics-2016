app.controller('welcomeController', ['$scope', 'languageService', 

function ($scope, language) {
  // Bilingual algorithm
  var trans = language.trans.welcome;
  var update = function () {
    $scope.START = trans[language.lang.toString()].START;
  };
  update();
  $scope.$watch(function () {
    return language.lang;
  }, function () {
    update();
  });
  // set class for background image
  $scope.pageClass = 'page-welcome';
  // determines if should display start button
  $scope.displayStart = false;
  // show start + change language
  $scope.showStart = function (lang) {
    language.setLang(lang);
    $scope.displayStart = true;
  };
}]);
