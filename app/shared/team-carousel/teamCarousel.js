app.directive('teamCarousel', function () {
  var link = function (scope, element, attrs) {
    var carousel = angular.element(element.children()[0]);
    $(carousel).Cloud9Carousel({
      autoPlay: 1,
      bringToFront: true,
    });
  };
  return {
    restrict: 'E',
    templateUrl: 'app/shared/team-carousel/team-carousel.html',
    link: link
  };
});
