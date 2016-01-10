app.directive('talkingMushroom', ['languageService', '$timeout', function (language, $timeout) {
  
  var link = function(scope, element, attrs) {
    // translation
    var intro;
    var trans = language.trans.speech;
    var update = function () {
      intro = trans[language.lang.toString()].INTRO;
      scope.info = trans[language.lang.toString()].MAP_INFO;
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
    // when counter is updated goAhead is invoked
    var goAhead = function () {
      speech.addClass('animated fadeOut');
      $timeout(function () {
        update();
        scope.text = intro[scope.counter];
        speech.removeClass('animated fadeOut');
        speech.addClass('animated fadeIn');
      }, 500);
    };
    // when counter reaches max length, moveHide()
    // move mushroom to the corner
    // show map
    var moveHide = function () {
      // hide dialog box and stuff
      scope.moved = false;
      scope.textBubble = false;
      dialog.addClass('animated fadeOut');
      speech.addClass('animated fadeOut');
      // move mushroom
      mushroom.addClass('animated fadeOut');
      // show map after 1 sec
      $timeout(function () {
        mushroom.removeClass('mushroom-talk');
        mushroom.removeClass('mushroom-move');
        mushroom.addClass('mushroom-corner');
        mushroom.removeClass('animated fadeOut');
        mushroom.addClass('animated fadeIn');
        $timeout(function () {
          mushroom.removeClass('animated fadeIn');
        }, 500);
        scope.cornered = true;
        $('nav-map').addClass('animated fadeIn');
        dialog.removeClass('animated fadeOut');
        dialog.removeClass('dialog-position');
        dialog.addClass('dialog-cornered');
        $timeout(function () {
          dialog.addClass('animated fadeIn');
          scope.speechBubble = true;
          $timeout(function () {
            dialog.removeClass('animated fadeIn');
            dialog.addClass('animated fadeOut');
            dialog.css({zIndex: '-1'});
          }, 3000);
        },500);
      }, 1500);
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

    var mushroom = $('mushroom-head');
    var dialog = $('.speech-bubble');
    var speech = $('.mushroom-speech');
    var button2Text = $('.flow-buttons > div:nth-child(2)');
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
