app.factory('languageService', function () {
  var language = {};
  // lang will be either 'en' or 'fr'
  // Default lang = 'en'
  language.lang = 'en';
  // set language
  language.setLang = function (lang) {
    this.lang = lang;
  };
  return language;
});
