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
            "Hello, my name is Toad. Welcome to MARIOnopolis!",
            "I will be your navigator on this site.",
            "Click me whenever you need help."
          ],
          "MAP_INFO": "This is the Map! Feel free to navigate the world of MARIOnopolis!"
        },
        "fr": {
          "INTRO": [
            "Bonjour, je m'appelle Toad. Bienvenue à MARIOnopolis!",
            "Je vais être votre guide sur ce site internet.",
            "Appuyez sur moi lorsque vous avez besoin d'aide."
          ],
          "MAP_INFO": "Voici la carte! N'hésitez pas à naviguer dans le monde de MARIOnopolis!"
        }
      }
    });
}]);
