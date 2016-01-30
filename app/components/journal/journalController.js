app.controller('journalController', [
  '$scope', 
  'languageService', 
  'jsonsService',
  function ($scope, language, jsons) {
    // for background image
    $scope.pageClass = 'page-journal';
    var trans = language.trans.nav;
    var update = function () {
      var lang = language.lang.toString();
      $scope.startTitle = trans[lang].JOURNAL;
    };
    update();
    jsons.getArticles(function (data) {
      $scope.journals = data[language.lang.toString()];
    });
}]);
