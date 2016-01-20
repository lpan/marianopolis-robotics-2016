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
                name: "Alexandra Laskaris",
                imageUrl: "alexla.jpg",
                program: "Honours Health Science",
                special: "Captain",
                game: "Super Mario Bros",
                experience: "I learnt that particiting in CRC requires countless hours and perseverance. In the end the results are worth all the injuries  and lack of sleep. "
              },
              {
                name: "Bilun Sun",
                imageUrl: "biluns.jpg",
                program: "Honours Pure and Applied Science",
                special: "Programming",
                game: "Mario Kart Wii",
                experience: "Before the robotics team, I had good knowledge of the C programming language, because I used the Arduino microcontroller to make my 3D printer. Therefore, RobotC was fairly fun and easy to pick up. I really enjoyed coding the Programming Challenge, mainly the line following task. I learned the basics of Proportional Integrative Derivative (PID) control, which is probably the best way for a robot to follow a line."
              },
              {
                name: "Derek Yu",
                imageUrl: "dereky.jpg",
                program: "Pure and Applied Science",
                special: "Programming",
                game: "Mario Kart",
                experience: "Being part of the team has allowed me to learn more about programming and apply what I already know to something practical. My favourite part was learning how to use PID with the robot to follow the line, yet it was also the most difficult part I had to deal with."
              },
              {
                name: "Hakim Sheiff",
                imageUrl: "hakims.jpg",
                program: "Pure and Applied Science",
                special: "Electrical Board and wiring of the robot",
                game: "Super Mario Bros on the Gameboy Color",
                experience: "The robotics team has taught me a lot about working in a team environment and the electrical system of a robot. Numerous issues have arisen while designing the robot's electrical system but I have been able to solve them with some creative thinking and the help of the mentors. I enjoy working in such a fun, yet challenging environment."
              }
            ],
            kio: [
              {
                name: "Sophie Deng",
                imageUrl: "sophied.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              }
            ],
            web: [
              {
                name: "Lawrence Pan",
                imageUrl: "lawrencep.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              },
              {
                name: "Yixuan Wang",
                imageUrl: "yixuanw.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              },
              {
                name: "Yuting Jiang",
                imageUrl: "yutingj.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              }
            ],
            vid: [
              {
                name: "Mahad Janjua",
                imageUrl: "mahadj.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              },
              {
                name: "Fan Chen",
                imageUrl: "fanc.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              },
              {
                name: "Qi Yue He",
                imageUrl: "qiyueh.jpg",
                program: "",
                special: "",
                game: "",
                experience: ""
              }
            ]
          }
        }
      }
    });
}]);
