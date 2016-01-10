app.directive('mushroomHead', ['$timeout', function ($timeout) {
  var link = function (scope, element) {
    // hover event listeners
    $(element).hover(function () {
      $(this).addClass('animated tada');
    }, function () {
      $(this).removeClass('animated tada');
    });
    // click event listeners
    $(element).
      mousedown(function () {
        $(this).removeClass('animated tada');
        $(this).addClass('animated bounce');
      }).
      mouseup(function () {
        var self = this;
        $timeout(function () {
          $(self).removeClass('animated bounce');
        }, 1000);
      });
  };

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/shared/mushroom-head/mushroom-head.html'
  };
}]);

