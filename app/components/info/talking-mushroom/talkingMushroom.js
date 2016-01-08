app.directive('talkingMushroom', ['languageService', '$timeout', function (language, $timeout) {
  
  var link = function(scope, element, attrs) {
    var trans = language.trans.speech;
    var update = function () {
      var intro = language.trans.speech[language.lang.toString()].INTRO;
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
      if (counter !== 4)
        counter ++;
    };
    scope.previous = function () {
      if (counter !== 0)
        counter --;
    };
    var goAhead = function () {
      var text = intro[counter];
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
        scope.moved = true;
        dialog.addClass('animated fadeIn');
        speech.html(trans[language.lang].INTRO[0]);
      }, 1500);
    }, 1000);
  };

  return {
    restrict: 'E',
    templateUrl: 'app/components/info/talking-mushroom/talking-mushroom.html',
    link: link
  };
}]);
