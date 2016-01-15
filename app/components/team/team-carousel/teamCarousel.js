app.directive('teamCarousel', ['languageService', '$timeout', function (language, $timeout) {
  var link = function (scope, element, attrs) {
    scope.teams = language.trans.team[language.lang.toString()].teams;
    // default is robot team;
    scope.showSlider = 'rob';
    $('#'+scope.showSlider).addClass('active-button');
    scope.show = function (page) {
      var oldButton = $('#'+scope.showSlider);
      var newButton = $('#'+page);
      scope.showSlider = page;
      oldButton.removeClass('active-button');
      newButton.addClass('active-button');
    };
  };

  return {
    restrict: 'E',
    templateUrl: 'app/components/team/team-carousel/team-carousel.html',
    link: link
  };
}]);
