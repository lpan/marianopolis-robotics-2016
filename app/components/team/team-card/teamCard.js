app.directive('teamCard', function () {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'app/components/team/team-card/team-card.html'
  };
});
