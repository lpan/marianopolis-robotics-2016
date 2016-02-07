app.directive('chLang', [
  '$route',
  'languageService',
  function ($route, language) {
    var controller = ['$scope', function ($scope) {
      var targetLang;
      if (language.lang === 'en') {
        $scope.text = 'En Français';
        targetLang = 'fr';
      } else {
        $scope.text = 'To English';
        targetLang = 'en';
      }
      $scope.translate = function () {
        language.lang = targetLang;
        $route.reload();
      };
    }];
    return {
      restrict: 'E',
      templateUrl: 'app/shared/translation/ch-lang/ch-lang.html',
      controller: controller,
      scope: true
    };
  }
]);
