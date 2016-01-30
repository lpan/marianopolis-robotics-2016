app.controller('journalController', ['$scope', 'languageService', function ($scope, language) {
  // for background image
  $scope.pageClass = 'page-journal';
  var trans = language.trans.nav;
  var update = function () {
    var lang = language.lang.toString();
    $scope.startTitle = trans[lang].JOURNAL;
  };
  update();
  $scope.journals = [
    {
      date: "November 1",
      day: "Day 1",
      text: "fdfdfd df df dfd fd  dfd fd fd fd fd fdf df",
      class: "civil left"
    },
    {
      date: "November 1",
      day: "Day 1",
      text: "fdfdfd df df dfd fd  dfd fd fd fd fd fdf df",
      class: "civil right"
    },
    {
      date: "November 1",
      day: "Day 1",
      text: "fdfdfd df df dfd fd  dfd fd fd fd fd fdf df",
      class: "civil left"
    }
  ];
}]);
