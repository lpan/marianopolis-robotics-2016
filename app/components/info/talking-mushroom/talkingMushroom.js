app.directive('talkingMushroom', ['languageService', '$timeout', function (language, $timeout) {
  
  var link = function(scope, element, attrs) {
    var intro;
    var update = function () {
      intro = language.trans.speech[language.lang.toString()].INTRO;
    };
    // assign value to intro variable
    update();
    scope.$watch(function () {
      return language.lang;
    }, function () {
      update();
    });
    // update text according to counter
    scope.counter = 0;
    scope.next = function () {
      if (scope.counter !== intro.length-1)
        scope.counter ++;
    };
    scope.previous = function () {
      if (scope.counter !== 0)
        scope.counter --;
    };
    var goAhead = function () {
      scope.text = intro[scope.counter];
      speech.html(scope.text);
    };
    scope.$watch('counter', function () {
      goAhead();
    });
    var mushroom = $('.mushroom-container');
    var dialog = $('.speech-bubble');
    var speech = $('#mushroom-speech');
    // hover effect
    mushroom.hover(function () {
      mushroom.addClass('animated bounce');
    }, function () {
      mushroom.removeClass('animated bounce');
    });
    mushroom.addClass('mushroom-center');
    mushroom.addClass('animated bounceInUp');
    $timeout(function () {
      mushroom.removeClass('animated bounceInUp');
      mushroom.addClass('mushroom-move');
      mushroom.addClass('mushroom-talk');
      dialog.addClass('dialog-position');
      $timeout(function () {
        goAhead();
        scope.moved = true;
        dialog.addClass('animated fadeIn');
      }, 1500);
    }, 1000);
  };

  return {
    restrict: 'E',
    templateUrl: 'app/components/info/talking-mushroom/talking-mushroom.html',
    link: link
  };
}]);
