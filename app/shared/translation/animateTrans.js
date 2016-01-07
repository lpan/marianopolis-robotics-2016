app.directive('animateTrans', ['languageService', function (language) {
  var link = function (scope, element, attrs) {
    var tags = language.toList(element[0].querySelectorAll('.ng-binding'));
    // receive signal from language switcher buttons
    scope.$watch(function () {
      return language.buttonClicked;
    }, function () {
      if (language.buttonClicked === true)
        language.animate(tags, 'animated fadeIn', 'animated fadeOut', 800);
    });
  };
  return {
    restrict: 'A',
    link: link
  };
}]);
