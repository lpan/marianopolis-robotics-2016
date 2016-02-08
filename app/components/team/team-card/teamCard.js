app.directive('teamCard', function () {
  return {
    restrict: 'E',
    link: link,
    scope: {
      member: '='
    },
    templateUrl: 'app/components/team/team-card/team-card.html'
  };
});
