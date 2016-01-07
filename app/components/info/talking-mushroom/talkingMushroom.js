app.directive('talkingMushroom', ['languageService', '$timeout', function (language, $timeout) {
  
  var link = function(scope, element, attrs) {
    var trans = language.trans.speech;
    var mushroom = $('.mushroom-container');
    var dialog = $('.speech-bubble');
    var speech = $('#mushroom-speech');
    // hover effect
    mushroom.hover(function () {
      mushroom.addClass('animated bounce');
    }, function () {
      mushroom.removeClass('animated bounce');
    });
    dialog.hover(function () {
      dialog.addClass('bounce');
    }, function () {
      dialog.removeClass('bounce');
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
        speech.html(trans[language.lang].FIRST);
      }, 1500);
    }, 1000);
  };

  return {
    restrict: 'E',
    templateUrl: 'app/components/info/talking-mushroom/talking-mushroom.html',
    link: link
  };
}]);
