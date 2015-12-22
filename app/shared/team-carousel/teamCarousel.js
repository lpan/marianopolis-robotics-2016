app.directive('teamCarousel', function () {
  var link = function (element, scope, attrs) {
    var carousel = $(element).find('#carousel');
    carousel.Cloud9Carousel({
      autoPlay: 1,
      bringToFront: true
    });
  };
  return {
    restrict: 'E',
    templateUrl: 'app/shared/team-carousel/team-carousel.html',
    link: link
  };
});
