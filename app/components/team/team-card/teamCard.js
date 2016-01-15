app.directive('teamCard', function () {
  var link = function (scope) {
    console.log(scope.member);
  };

  return {
    restrict: 'E',
    link: link,
    scope: {
      member: '='
    },
    templateUrl: 'app/components/team/team-card/team-card.html'
  };
});
