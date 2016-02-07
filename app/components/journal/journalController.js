app.controller('journalController', [
  '$scope', 
  'languageService', 
  'jsonsService',
  function ($scope, language, jsons) {
    // for background image
    $scope.pageClass = 'page-journal';
    var lang = language.lang.toString();
    $scope.startTitle = language.trans.nav[lang].JOURNAL;
    $scope.journalTitle = language.trans.journal[lang].TITLE;
    jsons.getArticles(function (data) {
      $scope.journals = data[language.lang.toString()];
    });
}]);
