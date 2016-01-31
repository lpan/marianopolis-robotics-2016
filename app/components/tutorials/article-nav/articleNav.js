app.directive('articleNav', ['languageService', function (language) {
  return {
    restrict: 'E',
    templateUrl: 'app/components/tutorials/article-nav/article-nav.html'
  };
}]);
