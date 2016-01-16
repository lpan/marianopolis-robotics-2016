app.directive('timelineJournal', function () {

  var link = function (scope) {

    /*
    scope.animateElementIn = function($el) {
      $el.removeClass('hidden');
      $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
    };

    scope.animateElementOut = function($el) {
      $el.addClass('hidden');
      $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
    };
    */

    scope.events = [
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check', 
        title: 'First heading',
        content: 'Some awesome content.'
      }, 
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check', 
        title: 'First heading',
        content: 'Some awesome content.'
      }, 
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check', 
        title: 'First heading',
        content: 'Some awesome content.'
      }, 
      {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check', 
        title: 'First heading',
        content: 'Some awesome content.'
      }, 
      {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card', 
        title: 'Second heading',
        content: 'More awesome content.' 
      },
      {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card', 
        title: 'Second heading',
        content: 'More awesome content.' 
      }
    ]; 
  };

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/components/journal/timeline-journal/timeline-journal.html'
  };
});
