app.directive('transitionScreen', ['$timeout', function ($timeout) {
  
  var link = function (scope, element) {
    $timeout(function () {
      $(element).addClass('animated fadeOut');
      $timeout(function () {
        $(element).css({zIndex: '-1'});
      }, 500);
    }, 1200);
  };

  return {
    restrict: 'E',
    link: link,
    scope: {
      name: '@'
    },
    templateUrl: 'app/shared/navigation/transition-screen/transition-screen.html'
  };
}]);
