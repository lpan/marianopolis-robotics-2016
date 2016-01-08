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
          "INTRO": [
            "Hello, my name is Toad. Welcome to MARIOnopolis",
            "I will be your navigator on this site",
            "Click me whenever you need help"
          ]
        },
        "fr": {
          "INTRO": [
            "Hello, my name is Toad. Welcome to MARIOnopolis",
            "I will be your navigator on this site",
            "Click me whenever you need help"
          ]
        }
      }
    });
}]);
