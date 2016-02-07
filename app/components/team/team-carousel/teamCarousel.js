app.directive('teamCarousel', [
  'languageService', 
  'jsonsService',
  '$timeout',
  function (language, jsons, $timeout) {
    var link = function (scope, element, attrs) {
      // Bilingual algorithm
      jsons.getTeam(function (data) {
        scope.teams = data[language.lang.toString()];
      });

      $('.arrow').hover(function () {
        $(this).addClass('animated wobble');
      }, function () {
        $(this).removeClass('animated wobble');
      });

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
