app.directive('arcLogo', function () {
  var link = function (scope, element, attrs) {
    $(element).lettering();
  };
  return {
    restrict: 'A',
    link: link
  };
});
