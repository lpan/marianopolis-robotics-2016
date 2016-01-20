app.directive('bookJournal', function () {

  var link = function (scope) {
    $('#flipbook').turn({
      width: 400,
      height: 300,
      autoCenter: true
    });
  };

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/components/journal/book-journal/book-journal.html'
  };
});
