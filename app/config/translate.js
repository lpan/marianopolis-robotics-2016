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
          TEAM: "Équipe",
          GALLERY: "Galerie",
          GAME: "Jeu",
          TUTORIALS: "Tutoriels",
          HELP: "Aide",
          SCHOOL: "École"
        }
      },
      journal: {
        en: {
          TITLE: "Story of"
        },
        fr: {
          TITLE: "L'Histoire de"
        }
      },
      tutorials: {
        en: {
          articles: [
            {
              name: "Translation with AngularJs",
              author: "Lawrence Pan"
            },
            {
              name: "Line Tracking Tutorial",
              author: "Derek Yu, Bilun Sun"
            }
          ]
        },
        fr: {
          articles: [
            {
              name: "Traduction avec AngularJs",
              author: "Lawrence Pan"
            },
            {
              name: "Tutoriel de Suivi de la Ligne",
              author: "Derek Yu, Bilun Sun"
            }
          ]
        }
      },
      game: {
        en: {
          text: "The Great Demon King Koopa has left behind a wheel that we would have to cross before we can arrive at the walls. The walls are our ultimate goal and that's where the robot comes into play. After investigating the walls for almost three weeks, we've come to the conclusion that it involves some sort of game to get over. Our robot, along with a few robots from our enemies, will have to pick up and gather game pieces of a certain colour and insert them into the slots that will appear in the two triangular walls called scoreboards. The turning wheel is between the two walls. The goal of the game is to obtain the maximum amount of points possible. All the game pieces do not have the same length and each unit of length is worth one point. Be careful! The pieces that are placed higher in the wall are worth more points! There are four total levels on the wall. The first level is worth 10 points per unit of length, the second level is worth 20 points per unit of length, the third level is worth 30 points per unit of length, and the fourth level is worth 40 points per unit of length. For example, if we had a game piece of 2 units of length on the second level, that would give us 40 points. There is also something else we need to be very careful about; it's that there's something called the multiplier that can multiply the score of our team. By creating a triangle in the wall with a base that is either 2, 3 or 4 game pieces of the same colour in the outermost layer of the triangle. For example, if you form a triangle with three game pieces, your score will me multiplied by two. This is what we have concluded from investigating . Clearly, Bowser has left us a complicated game. Our total score will be compared to other teams in this game, so we must do our best to win! We can also get other points from the kiosk, web page, and video we will do for this game. Clearly, Bowser has left us a complicated game. We will be compared to other teams, so we must do our best to win!"
        },
        fr: {
          text: "Bowser a laissé derrière lui une grande roue rouge que nous devrons traverser pour atteindre les deux murs qui sont de chaque côté de la grande roue. Notre but est d'arriver à un mur avec une pièce de jeu (une nouille) que nous allons mettre dans les ouvertures qui sont faites exprès pour les nouilles. Après avoir examiné les murs de près pendant presque trois semaines, nous avons déterminé que ce que Bowser a laissé est, en quelque sorte, un jeu. Notre robot, avec des robots qui appartiennent à notre ennemi, va devoir aller chercher des nouilles et les mettre dans les trous des murs triangulaires, appelés  les panneaux de pointage. Le but ultime est d'accumuler le plus de points possible. Les pièces de jeu n'ont pas toutes la même longueur et chaque unité de longueur vaut un point. Il faut être vigilant! Les pièces qui sont placées plus haut valent plus de points! Au total, il y a quatre niveaux sur les murs. Le premier niveau vaut 10 points par unité de longueur, le deuxième niveau vaut 20 points par unité de longueur, le troisième niveau vaut 30 points par unité de longueur, et, finalement, le quatrième niveau vaut 40 points par unité de longueur. Par exemple, si on avait une nouille qui nous appartient de 2 unités de longueur au deuxième niveau, cela nous donnerait 40 points. Il y a également quelque chose d'autre de très important! Le multiplicateur peut multiplier le score final de notre équipe. C'est en créant un triangle dans le mur, avec nos nouilles, de la même couleur, qui doivent créer une base de deux, trois, ou quatre pièces de jeu dans la première couche (avant plan) du triangle, que nous pouvons multiplier nos points. Par exemple, si on forme un triangle avec une base de deux pièces de jeu (trois pièces de jeu en tout), nos points vont être multipliés par trois. Notre score va être comparé à celui des autres équipes et l'équipe avec le plus haut score gagne. Évidemment, Bowser nous a laissé un jeu très compliqué appelé Pythagorium"
        }
      },
      school: {
        en: {
          text: [
            "Mario-nopolis College is an English-language private CEGEP located on a small hill in the World of Marionopolis. It's a small anglophone college that houses a student body of around 2,000 Mini-Marios. The school was established in 1908 as the first institution of higher learning for anglophone Catholic  women. Mario-nopolis College offers a variety of pre-university programs. Our current campus has twelve wings, two gyms, one fitness centre, more than four computer labs, and multiple science laboratories. In addition, there's an enormous library in which all the students can comfortably study!",
            "We have over a hundred clubs in our school and the student life at Mario-nopolis is supported by our student government called Congress.",
            "Location:",
            "4873 Avenue Westmount, H3Y 1X9",
            "Westmount, World of Marionopolis"
          ]
        },
        fr: {
          text: [
            "Mario-nopolis College est un collège privé anglophone situé sur une petite colline dans le Monde de Marianopolis. C'est un petit collège avec une population étudiante d'environ 2 000 min-marios. L'école a été fondée en 1908 comme étant le premier établissement d'enseignement collégial pour les femmes catholiques anglophones. Mario-nopolis College offre plusieurs programmes préuniversitaires. Notre campus actuel comprend douze pavillons, deux gymnases, un centre de fitness, plus de quatre laboratoires d'ordinateurs, et plusieurs laboratoires scientifiques. De plus, il y a une immense bibliothèque dans laquelle les étudiants peuvent étudier confortablement!",
            "À Mario-nopolis, nous avons environ cent clubs et la vie étudiante est dirigée par le Congress, notre propre gouvernement par les étudiants pour les étudiants.",
            "Location:",
            "4873 Avenue Westmount, H3Y 1X9",
            "Westmount, Monde de Westmount"
          ]
        }
      }
    });
}]);
