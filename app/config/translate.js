app.config(['languageServiceProvider', function (language) {
  language.setTrans(
    {
      "welcome": {
        "en": {
          "START": "Start"
        },
        "fr": {
          "START": "Commencer"
        }
      }
    });
}]);
