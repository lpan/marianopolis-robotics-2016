app.directive('welLogo', function ($timeout) {
  var link = function (scope, element, attrs) {
    var curved = angular.element(element.children()[0]);
    var robotics = angular.element(element.children()[2]);
    $(curved).arctext({radius: 400});
    $(robotics).arctext({radius: 1000});
    $(element).find('span').hover(function () {
      $(this).addClass('animated bounce');
    }, function () {
      var self = $(this);
      $timeout(function () {
        self.removeClass('animated bounce');
      }, 1000);
    });
  };
  return {
    templateUrl: 'app/components/welcome/main-logo/wel-logo.html',
    restrict: 'E',
    link: link
  };
});
