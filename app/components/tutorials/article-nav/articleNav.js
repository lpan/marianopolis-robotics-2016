app.directive('articleNav', ['languageService', function (language) {

  var controller = ['$scope', function ($scope) {
    $scope.articles = [
      {
        name: "Translation with AngularJs",
        author: "Lawrence Pan"
      },
      {
        name: "Line Tracking Tutorial",
        author: "Derek Yu, Bilun Sun"
      }
    ];
  }];

  return {
    restrict: 'E',
    controller: controller,
    templateUrl: 'app/components/tutorials/article-nav/article-nav.html'
  };
}]);
