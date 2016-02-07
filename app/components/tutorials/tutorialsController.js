app.controller('tutorialsController', [
  '$scope',
  '$route',
  'languageService', 
  function ($scope, $route, language) {
    // for background image
    $scope.pageClass = 'page-tutorials';
    // translation framework
    var lang = language.lang.toString();
    $scope.startTitle = language.trans.nav[lang].TUTORIALS;
    $scope.articles = language.trans.tutorials[lang].articles;
    // Switching between tutorials
    var current = '/robot.html';
    $scope.currentLink = 'app/components/tutorials/tutorials/' + language.lang.toString() + current;
    $scope.changeArticle = function (desitination) {
      current = desitination;
      $scope.currentLink = 'app/components/tutorials/tutorials/' + language.lang.toString() + current;
    };
  }
]);
