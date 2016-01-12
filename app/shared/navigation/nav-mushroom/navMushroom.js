app.directive('navMushroom', ['$timeout', function ($timeout) {

  var link = function (scope, element) {
    var mushroom = $('mushroom-head');
    var map = $('nav-map');
    // bounce when enters
    mushroom.addClass('animated bounce');
    $timeout(function () {
      mushroom.removeClass('animated bounce');
    }, 1000);
    scope.showMap = false;
    // to prevent repetitive clicks
    var clicked = false;
    scope.changeMapState = function () {
      if (!clicked) {
        scope.showMap = !scope.showMap;
        clicked = true;
        $timeout(function () {
          clicked = false;
        }, 1200);
      }
    };
    scope.$watch('showMap', function (newVal, oldVal) {
      if (newVal && !oldVal) {
        map.addClass('animated fadeIn');
        $timeout(function () {
          map.removeClass('animated fadeIn');
        }, 1200);
      } else if (!newVal && oldVal) {
        map.addClass('animated fadeOut');
        $timeout(function () {
          map.removeClass('animated fadeOut');
        }, 1200);
      }
    });
  };

  return {
    restrict: 'E',
    templateUrl: 'app/shared/navigation/nav-mushroom/nav-mushroom.html',
    link: link
  };
}]);

