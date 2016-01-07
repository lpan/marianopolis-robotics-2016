app.directive('teamCarousel', function () {
  var link = function (scope, element, attrs) {
    $('#carousel').Cloud9Carousel({
      autoPlay: 1,
      bringToFront: true,
    });
  };
  return {
    restrict: 'E',
    templateUrl: 'app/components/team/team-carousel/team-carousel.html',
    link: link
  };
});
