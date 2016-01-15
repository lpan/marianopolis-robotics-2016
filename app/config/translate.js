app.config(['languageServiceProvider', function (language) {
  language.setTrans(
    {
      welcome: {
        en: {
          START: "Start"
        },
        fr: {
          START: "Commencer"
        }
      },
      speech: {
        en: {
          INTRO: [
            "Hello, my name is Toad. Welcome to MARIOnopolis!",
            "I will be your navigator on this site.",
            "Click me whenever you need help."
          ],
          MAP_INFO: "This is the Map! Feel free to navigate the world of MARIOnopolis!"
        },
        fr: {
          INTRO: [
            "Bonjour, je m'appelle Toad. Bienvenue à MARIOnopolis!",
            "Je vais être votre guide sur ce site internet.",
            "Appuyez sur moi lorsque vous avez besoin d'aide."
          ],
          MAP_INFO: "Voici la carte! N'hésitez pas à naviguer dans le monde de MARIOnopolis!"
        }
      },
      nav: {
        en: {
          JOURNAL: "Journal",
          TEAM: "Team",
          GALLERY: "Gallery",
          GAME: "Game",
          TUTORIALS: "Tutorials",
          HELP: "Help",
          SCHOOL: "School"
        },
        fr: {
          JOURNAL: "Journal",
          TEAM: "Team",
          GALLERY: "Gallery",
          GAME: "Game",
          TUTORIAL: "Tutorial",
          HELP: "Help",
          SCHOOL: "School"
        }
      },
      team: {
        en: {
          teams: {
            rob: [
              {
                name: "Paul Farquar",
                imageUrl: "paulf.jpg",
                experience: ""
              },
              {
                name: "Alex Laskaris",
                imageUrl: "alexla.jpg",
                experience: ""
              }
            ],
            kio: [
              {
                name: "Sophie Deng",
                imageUrl: "sophied.jpg",
                experience: ""
              }
            ],
            web: [
              {
                name: "Lawrence Pan",
                imageUrl: "lawrencep.jpg",
                experience: ""
              },
              {
                name: "Yixuan Wang",
                imageUrl: "yixuanw.jpg",
                experience: ""
              },
              {
                name: "Yuting Jiang",
                imageUrl: "yutingj.jpg",
                experience: ""
              }
            ],
            vid: [
              {
                name: "Mahad Janjua",
                imageUrl: "mahadj.jpg",
                experience: ""
              },
              {
                name: "Fan Chen",
                imageUrl: "fanc.jpg",
                experience: ""
              },
              {
                name: "Qi Yue He",
                imageUrl: "qiyueh.jpg",
                experience: ""
              }
            ]
          },
          fr: {
          }
        }
      }
    });
}]);
