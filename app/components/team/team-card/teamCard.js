app.directive('teamCard', ['languageService', function (language) {
  var controller = ['$scope', function ($scope) {
    var lang = language.lang.toString();
    $scope.infos = language.trans.team[lang].infos;
  }];

  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    controller: controller,
    templateUrl: 'app/components/team/team-card/team-card.html'
  };
}]);
