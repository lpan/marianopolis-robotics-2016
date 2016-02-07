app.provider('languageService', function () {
  var _trans;
  this.setTrans = function (obj) {
    _trans = obj;
  };
  this.$get = ('languageService', ['$timeout', function ($timeout) {
    var language = {};
    // lang will be either 'en' or 'fr'
    // Default lang = 'en'
    language.lang = 'en';
    // if set language button(s) is clicked
    language.buttonClicked = false;
    // assign trans to data obtained from app.config
    language.trans = _trans;
    // set language
    language.setLang = function (lang) {
      this.lang = lang;
    };
    language.currentPage = '/';
    return language;
  }]);
});
