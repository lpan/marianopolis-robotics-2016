app.controller('welcomeController', ['$scope', 'languageService', 

function ($scope, language) {
  // Bilingual algorithm
  var translate = {
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
    language.setLang(lang);
    $scope.displayStart = true;
  };
  // Update var when language is changed
  // Default lang is english
  $scope.$watch(function () {
    return language.lang;
  }, function (newVal) {
    var lang = language.lang.toString();
    $scope.START = translate[lang].START;
  });
}]);
