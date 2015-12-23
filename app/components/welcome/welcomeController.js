app.controller('welcomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  // Bilingual algorithm
  var languages = {
    en: {
      START: 'Start'
    },
    fr: {
      START: 'Commencer'
    }
  };
  // set class for background image
  $scope.pageClass = 'page-welcome';
  // determines if should display start button
  $scope.displayStart = false;
  // show start + change language
  $scope.showStart = function (lang) {
    // setLang inherited from rootscope
    $scope.setLang(lang);
    $scope.displayStart = true;
  };
  // Update var when language is changed
  // Default lang is english
  $rootScope.$watch('lang', function (newVal) {
    if (newVal === 'fr') {
      $scope.START = languages.fr.START;
    } else {
      $scope.START = languages.en.START;
    }
  });
}]);
