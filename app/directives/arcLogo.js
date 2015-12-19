app.directive('arcLogo', function () {
  var link = function (scope, element, attrs) {
    $(element).arctext({radius: 400});
  };
  return {
    restrict: 'A',
    link: link
  };
});
