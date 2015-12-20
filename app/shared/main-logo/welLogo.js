app.directive('welLogo', function () {
  var link = function (scope, element, attrs) {
    var curved = angular.element(element.children()[0]);
    var robotics = angular.element(element.children()[2]);
    $(curved).arctext({radius: 400});
    $(robotics).lettering();
    $(element).find('span').addClass('shake-slow');
  };
  return {
    templateUrl: 'app/shared/main-logo/wel-logo.html',
    restrict: 'E',
    link: link
  };
});
