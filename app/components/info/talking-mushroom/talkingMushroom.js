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
      if (scope.counter !== intro.length)
        scope.counter ++;
    };
    scope.previous = function () {
      if (scope.counter !== 0)
        scope.counter --;
    };
    var goAhead = function () {
      scope.text = intro[scope.counter];
      speech.addClass('animated fadeOut');
      $timeout(function () {
        speech.html(scope.text);
        speech.removeClass('animated fadeOut');
        speech.addClass('animated fadeIn');
      }, 500);
    };
    // move mushroom to the corner
    var moveHide = function () {
      // hide dialog box and stuff
      scope.moved = false;
      dialog.addClass('animated fadeOut');
      speech.addClass('animated fadeOut');
      // move mushroom
      mushroom.removeClass('mushroom-talk');
      mushroom.addClass('mushroom-corner');
    };

    scope.$watch('counter', function () {
      if (scope.counter === intro.length-1) {
        goAhead();
        button2Text.html('Got it');
        button2Text.addClass('animated swing');
      } else if (scope.counter === intro.length) {
        moveHide();
      } else {
        goAhead();
        button2Text.html('Next');
        button2Text.removeClass('animated swing');
      }
    });

    var mushroom = $('.mushroom-container');
    var dialog = $('.speech-bubble');
    var speech = $('#mushroom-speech');
    var button2Text = $('.flow-buttons > div:nth-child(2)');
    // hover effect
    mushroom.hover(function () {
      mushroom.addClass('animated tada');
    }, function () {
      mushroom.removeClass('animated tada');
    });
    // center the mushroom
    mushroom.addClass('mushroom-center');
    mushroom.addClass('animated bounceInUp');
    $timeout(function () {
      // avoid conflict between css transition and animate.css
      mushroom.removeClass('animated bounceInUp');
      mushroom.removeClass('mushroom-center');
      mushroom.addClass('mushroom-move');
      mushroom.addClass('mushroom-talk');
      dialog.addClass('dialog-position');
      $timeout(function () {
        // when mushroom is positioned, show dialog
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
