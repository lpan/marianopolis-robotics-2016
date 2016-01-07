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
      },
      "speech": {
        "en": {
          "FIRST": "Hello, my name is Toad. Welcome to MARIOnopolis",
          "SECOND": "I will be your navigator on this site",
          "LAST": "Click me whenever you need help"
        },
        "fr": {
          "FIRST": "Hello, my name is Toad. Welcome to MARIOnopolis",
          "SECOND": "I will be your navigator on this site",
          "LAST": "Click me whenever you need help"
        }
      }
    });
}]);
