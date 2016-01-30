app.directive('bookJournal', function () {

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'app/components/journal/book-journal/book-journal.html'
  };
});
