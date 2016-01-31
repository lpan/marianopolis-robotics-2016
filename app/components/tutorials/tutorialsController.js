app.controller('tutorialsController', [
  '$scope',
  'languageService', 
  function ($scope, language) {
    // for background image
    $scope.pageClass = 'page-tutorials';
    var trans = language.trans.nav;
    var update = function () {
      var lang = language.lang.toString();
      $scope.startTitle = trans[lang].TUTORIALS;
    };
    update();
    var robot = '/robot.html';
    var website = '/website.html';
    $scope.currentLink = 'app/components/tutorials/tutorials/' + language.lang.toString() + robot;
}]);
