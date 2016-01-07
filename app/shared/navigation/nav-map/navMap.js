app.directive('navMap', function() {
  var link = function (scope, element, attrs) {
    $(element).find('#textBox').addClass('animated lightSpeedIn');
  };
  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/shared/navigation/nav-map/nav-map.html'
  };
});
