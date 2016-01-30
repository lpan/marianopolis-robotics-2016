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
        fr: {
          teams: {
            rob: [
              {
                name: "Paul Farquhar",
                imageUrl: "paulf.jpg",
                program: "Sciences Pures et Appliquées",
                special: "Être Mario",
                game: "Super mario world 2",
                experience: "J'ai appris à apprécier qu'aucune tâche est accomplie par magie, seulement par le travail d'équipe. Après avoir aidé l'équipe de kiosque et de vidéo, j'ai pu poursuivre d'autres projets de construction et de montage vidéo. Ma partie préférée comprends certains tâches de contruction concernant le kiosque, parce que je suis très fier du résultat. Il y avait eu quelques moments d' essais et erreurs, ce qui nécessitait de nombreuses soirées sacrifiés pour respecter les délais."
              },
              {
                name: "Mathew Kfouri",
                imageUrl: "mathewk.jpg",
                program: "Sciences Pures et Appliquées",
                special: "Extrusion d'assemblage",
                game: "Super Mario Galaxy",
                experience: "J'ai appris à utiliser différents types de matériaux  particulièrement l'extrusion et les kits de mouvement linéaire. J'ai eu la chance de travailler sur un robot complètement différent avec des personnes que je n'aurais jamais rencontrer sans la competition.  La partie la plus difficile a été de concevoir un système d'ascension qui répond aux restrictions de hauteur. Les heures de la construction durant les fin de semaines ont valu la peine."
              },
              {
                name: "Alexandra Laskaris",
                imageUrl: "alexla.jpg",
                program: "Sciences de la Santé Honneur",
                special: "Capitaine",
                game: "Super Mario Bros",
                experience: "J'ai appris que participer à la competition robotique CRC exige de la persévérance et d'innombrables heures de travail. Par contre, à la fin, les résultats valent toutes les blessures et toutes les heures de sommeil manquées."
              },
              {
                name: "Bilun Sun",
                imageUrl: "biluns.jpg",
                program: "Sciences Pures et Appliquées Honneur",
                special: "Programmer",
                game: "Mario Kart Wii",
                experience: "Avant l'équipe de robotique, je savais déjà comment programmer en C, parce que j'ai utilisé le microcontrolleur Arduino pour construire mon imprimante 3D. Par conséquent, RobotC fut relativement amusant et facile à apprendre. J'ai vraiment aimé le Programming Challenge, surtout la tâche de suivre une ligne. J'ai appris les bases du contrôle Proportionnel Intégrateur Dérivateur (PID), qui est probablement la meilleur méthode pour un robot de suivre une ligne."
              },
              {
                name: "Derek Yu",
                imageUrl: "dereky.jpg",
                program: "Sciences Pures et Appliquées",
                special: "Programmer",
                game: "Mario Kart",
                experience: "Faire parti de l'équipe m'a permis d'apprendre plus sur la programmation, et de mettre en pratique ce que j'ai appris en théorie. Ce que j'ai aimé le plus c'est d'apprendre comment implémenter PID au robot pour suivre la ligne, mais en même temps, ce fut également la partie la plus difficile de la tâche."
              },
              {
                name: "Giuliana Mannarino",
                imageUrl: "giulianam.jpg",
                program: "Sciences Pures et Appliquées",
                special: "Robot",
                game: "Super Mario Bros",
                experience: "C'était amusant d'apprendre à connaître tout le monde sur l'équipe et de travailler avec eux pour faire fonctionner le robot. La perceuse que Mario nous a apporté a vraiment fait toute une différence."
              },
              {
                name: "Melanie Alfonso",
                imageUrl: "melaniea.jpg",
                program: "Sciences de la Santé",
                special: "Fabrication des pièces",
                game: "Mario and Luigi: Bowser's Inside Story",
                experience: "J'ai aimé apprendre à connaître tous les membres de l'équipe de Marianopolis ainsi que d'avoir la possibilité de découvrir CRC pour la première fois. Bien que nous avons été confrontés par de nombreux défis relatifs à la fonctionnalité du mécanism de l'ascension du robot , ces obstacles ont contribué à notre apprentissage."
              },
              {
                name: "Vincent Van Duong",
                imageUrl: "vincentd.jpg",
                program: "Sciences Pures et Appliquées",
                special: "CAD",
                game: "Mario Kart",
                experience: "J'ai appris beaucoup cette saison. J'ai appris que peut importe à quel point tu conçois bien le robot, il y aura toujours quelque chose qui ne fonctionnera pas. Je pense que le design du robot de cette année sera vraiment cool et différent. Dans l'ensemble, l'expérience fut amusante,à l'exception que nous étions obligés de se présenter tôt le matin durant les vacances d'hiver. Travailler sur le robot et la vidéo était également un défi, puisque je ne pouvais pas toujours faire les deux en même temps."
              },
              {
                name: "Alex Le Blanc",
                imageUrl: "alexle.jpg",
                program: "Sciences Pures et Appliquées Honneur",
                special: "Travaux aléatoires sur le robot",
                game: "Super Mario Galaxy",
                experience: "J'ai appris que les mesures de sécurité sont surcotées . J'ai apprécié l'assemblage du métal extrudé pour le robot , car il est beaucoup plus facile à manipuler en comparaison avec ce ce que je suis habitué à utiliser. Les plus grandes difficultés sont le manque de ressources dès le début, ce qui a rendu plus difficile le prototypage . Les plus grands sacrifices que j'ai fait étaient les longs voyages périlleux de la salle de la robotique à l' annexe."
              },
              {
                name: "Jana Kano",
                imageUrl: "janak.jpg",
                program: "Sciences de la Santé",
                special: "Construire des trucs",
                game: "Mario Kart",
                experience: "J'ai appris beaucoup de choses et j'ai acquis beaucoup d'expérience en faisant partie de l'équipe de robotique. J'ai appris beaucoup sur l'extrusion, puisque c'était la première fois que je l'utilisait. Nous avons eu de la difficulté à respecter les dates limites, mais nous nous sommes assurés de ne pas être trop en retard dans notre échéancier. Malgré que nous devions venir tôt au collège durant les vacances d'hiver, j'ai eu beaucoup de plaisir à construire le robot et à le voir fonctionner."
              },
              {
                name: "Hakim Sheiff",
                imageUrl: "hakims.jpg",
                program: "Sciences Pures et Appliquées",
                special: "Panneau électrique et câbler le robot",
                game: "Super Mario Bros on the Gameboy Color",
                experience: "L’équipe de robotique m’a appris à travailler en équipe et à propos des circuits électrique des robots. De nombreux problèmes se sont produits lors de la conception du circuit électrique, mais j’ai réussi à les résoudre avec un peu d’aide. J’ai beaucoup aimé travailler dans cet environnement à la fois amusant et difficile."
              }
            ],
            kio: [
              {
                name: "Angelica Le",
                imageUrl: "angelical.jpg",
                program: "Sciences de la Santé",
                special: "Design le kiosque et l'uniforme, dessiner et painturer",
                game: "Super Smash Bros",
                experience: "En tant que nouvelle membre de l'équipe de robotique de Marianopolis, je peux en toute confiance dire que cette experience a été tout à fait mémorable. Malgré les longues heures de travail, nous avons tous partagés de beaux moments. En travaillant sur un projet de ce grandeur,ceci nous a encouragé à travailler dur dans le but d'obtenir un kiosque duquel nous sommes tous fiers."
              },
              {
                name: "Vanessa Seraspe",
                imageUrl: "vanessas.jpg",
                program: "Sciences de la Santé",
                special: "Design, dessiner et painturer",
                game: "Super Mario Bros",
                experience: "Faire partie de l’équipe de Robotique de Marionopolis pour une deuxième année a été formidable. Nous avons rencontré des défis lors de la construction du kiosque, mais nous les avons facilement surmontés en équipe. En voyant l'evolution progressive de notre kiosque au courant des 10 jours, toutes les taches de peinture sur mes vetements (qui ne s'enlevent plus!) ont valu la peine. J'espère que le Collège sera fier de nous!"
              },
              {
                  name: "Sally Adam",
                  imageUrl: "sallya.jpg",
                  program: "Sciences Pures et Appliquées",
                  special: "Je peux peindre en dedans des lignes",
                  game: "Mario Bros",
                  experience: "J'ai adoré travailler avec mes coéquipiers durant les journées de travail. C'était un excellant moyen de faire de nouveaux amis. Cependant, comme prévu, il y a eu quelques difficultés; par exemple, stabiliser la structure du kiosque. Néanmoins, nous avons surmontés tous nos difficultés en tant qu'équipe!"
                },
                {
                  name: "Sophie Deng",
                  imageUrl: "sophied.jpg",
                  program: "Sciences Pures et Appliquées",
                  special: "Peindre les murs",
                  game: "New super mario bros (D2 lite)",
                  experience: "J’ai aimé travailler sur le kiosque, car c’était amusant et intéressant de peindre et de fabriquer les accessoires. Habituellement, je n’ai pas la chance de travailler sur des projets comme celle-ci. Lever tôt les matins durant les vacances d'hiver était très difficile. J’ai dû sacrifier mes heures de sommeille et mon temps libre, mais ça valait la peine, puisque j’ai pu apprendre davantage sur les mécanismes et expérimenter de nouvelles choses."
                },
                {
                  name: "Amanda Morgan",
                  imageUrl: "amandam.jpg",
                  program: "Sciences de la Santé",
                  special: "Contribution",
                  game: "Mario Kart",
                  experience: "J'ai appris plus sur la construction, la peinture et travailler en équipe"
                },
                {
                  name: "Allyson Fontes",
                  imageUrl: "allysonf.jpg",
                  program: "Sciences Pures et Appliquées",
                  special: "Faire les pièces mobiles du kiosque",
                  game: "Super Mario Bros",
                  experience: "L'équipe de robotique était, une fois de plus, beaucoup de plaisir. Par contre, la conception et la construction du kiosque ne fut pas une tâche facile. Stabiliser les murs, fabriquer les parties méchaniques et peindre posaient le plus de défi."
                }
            ],
            web: [
              {
                  name: "Lawrence Pan",
                  imageUrl: "lawrencep.jpg",
                  program: "Sciences Pures et Appliquées Honneur",
                  special: "Gourou du site web",
                  game: "Super Mario Bros",
                  experience: "Dans l'ensemble, faire partie de l' équipe de robotique était une expérience amusante . J'ai amélioré mes compétences en développement de site web , y compris l'apprentissage du développement frontale avec angularjs , en utilisant Grunt pour automatiser des tâches , etc. Cependant, ma plus grande acquisition lors de cette expérience est la collaboration avec les autres membres en travaillant sur un aussi grand projet."
                },
                {
                  name: "Yixuan Wang",
                  imageUrl: "yixuanw.jpg",
                  program: "Sciences Pures et Appliquées",
                  special: "Codage front-end et design",
                  game: "Mario Kart Wii",
                  experience: "CRC a été une belle expérience globale. J'ai beaucoup appris au sujet du développement de la programmation des sites Internet. J'ai beaucoup apprécié la journée de pizza gratuite! Cependant, me lever tôt pour aller à l'école pendant les vacances d'hiver était la chose la plus difficile au monde. Il était également très difficile de penser à un design pour le site"
                },
                {
                  name: "Yuting Jiang",
                  imageUrl: "yutingj.jpg",
                  program: "Sciences de la Santé",
                  special: "Aider les autres/rien de spécial",
                  game: "Mario Kart",
                  experience: "J’ai beaucoup appris de l’équipe de robotique. J’étais en charge du journal et des médias, mais j’ai également aidé un peu partout. Puisque j’ai aidé un peu partout, j’ai appris un peu de tout. J’ai sacrifié mon sommeil et mon précieux temps libre de mes vacances de Noel pour le club. Je me rappelle, à la fin, j’avais des cernes sous les yeux."
                }
            ],
            vid: [
              {
                  name: "Mahad Janjua",
                  imageUrl: "mahadj.jpg",
                  program: "Sciences de la Santé Honneur",
                  special: "Filmage vidéo",
                  game: "Mario Kart 7",
                  experience: "J'ai appris davantage sur les différentes étapes de réalisation et de modification des vidéos. J'ai eu beacoup de plaisir à parler aux acteurs qui sont aussi dans l'équipe et de les filmer. Lors du tounage, il y a eu plusieurs moments comiques et peut-être même quelques bloopers pour la vidéo. En outre, la vidéo a nécessité beaucoup de temps et d'effort. Il a aussi fallut reprendre quelques scènes. Somme toute, j'ai passé un bon moment."
                },
                {
                  name: "Fan Chen",
                  imageUrl: "fanc.jpg",
                  program: "Sciences Pures et Appliquées Honneur",
                  special: "Video",
                  game: "Super Mario 3D World",
                  experience: "J'ai beaucoup appris sur les étapes de création d'un films, particulièrement sur le montage vidéo et les animations. En effet, nous avons passé beacoup de temps à faire de le montage vidép puisque nous avons pris beaucouop de prises et nous les avons mis dans différents fichier ce qui fait que c'est tout en désordre. J'ai aussi appris à utiliser le logiciel After Effect pour faire des animations ce qui est vraiment intéressant. J'ai beaucoup apprécié la pizza gratuite!"
                },
                {
                  name: "Qi Yue He",
                  imageUrl: "qiyueh.jpg",
                  program: "Sciences de la Santé Honneur",
                  special: "Modifier/Animer la vidéo",
                  game: "Mario 3D World",
                  experience: "J’ai appris l’importance de la communication pour comprendre l’opinion de mes coéquipiers. Ce qui est difficile avec les montages vidéo, c’est que l’on ne peut pas travailler sur des ordinateurs différents, puisque les fichiers doivent rester à la même place. De plus, faire le montage sur un ordinateur portatif est relativement lent. Un des sacrifices que j’ai fait, c’est devoir travailler à la maison durant les vacances et les pauses."
                }
              ]
            }
          },
          en: {
            teams: {
              rob: [
                {
                  name: "Paul Farquhar",
                  imageUrl: "paulf.jpg",
                  program: "Pure and Applied Science",
                  special: "Being Mario",
                  game: "Super mario world 2",
                  experience: "I learned to appreciate that no task is accomplished magically, only by teamwork. After working with the kiosk and video teams, I can pursue other projects in construction or video editing. My favorite part was directing some kiosk jobs, because I admire the result. There was some trial and error, which required many late nights sacrificed to meet deadlines."
                },
                {
                  name: "Mathew Kfouri",
                  imageUrl: "mathewk.jpg",
                  program: "Pure and Applied Science",
                  special: "Assembling Extrusion",
                  game: "Super Mario Galaxy",
                  experience: "I learned how to use different types of materials, extrusion and linear motion kits in particular. I enjoyed the chance to work on a completely different robot and meet people that I wouldn't have otherwise. The most difficult part was designing a lift system that fit within the height restrictions. The hours of building on the weekend were definitely worth it. "
                },
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
                  name: "Giuliana Mannarino",
                  imageUrl: "giulianam.jpg",
                  program: "Pure and Applied Science",
                  special: "Robot",
                  game: "Super Mario Bros",
                  experience: "It was fun getting to know everyone on the team and working with them to get the robot functioning. That drill that Mario brought us really made all the difference."
                },
                {
                  name: "Melanie Alfonso",
                  imageUrl: "melaniea.jpg",
                  program: "Health Science",
                  special: "Part Manufacturing",
                  game: "Mario and Luigi: Bowser's Inside Story",
                  experience: "I enjoyed getting to know all the members of the Marianopolis Team as well as having the opportunity to experience CRC for the first time. Though we faced many challenges pertaining to the functionality of the lift, these obstacles made for a great learning experience"
                },
                {
                  name: "Vincent Van Duong",
                  imageUrl: "vincentd.jpg",
                  program: "Pure and Applied Science",
                  special: "Special Skill: CAD",
                  game: "Mario Kart",
                  experience: "I learned a lot this season. I learned that no matter how well you design anything, things will go wrong.  I think that this year's robot design will be really cool and different. Overall, the journey has been fun, except for waking up early during the break. Working on both robot and video has also been a challenge as I can't always do both simultaneously given the short amount of time."
                },
                {
                  name: "Alex Le Blanc",
                  imageUrl: "alexle.jpg",
                  program: "Honours Pure and Applied Science",
                  special: "Random tasks on the robot",
                  game: "Super Mario Galaxy",
                  experience: "I learned that safety measures are overrated. I enjoyed assembling the extruded metal for the robot, since it’s much easier to use than what I’m used to. The greatest difficulties were a lack of resources from the beginning, which made prototyping harder without buying stuff every so often. The greatest sacrifices I made were the long, perilous journeys from the robotics room to the annexe. "
                },
                {
                  name: "Jana Kano",
                  imageUrl: "janak.jpg",
                  program: "Health Science",
                  special: "Building stuff",
                  game: "Mario Kart",
                  experience: "I gained a lot of knowledge and experience from being part of the robotics team. I learned a lot about extrusion since it was my first time using it. We had some problems following the deadlines, but we quickly made sure we weren't too much behind schedule. Although we had to come to school early during the winter break, I had a lot of fun building the robot and seeing it work."
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
                  name: "Angelica Le ",
                  imageUrl: "angelical.jpg",
                  program: "Health Science",
                  special: "Designing kiosk and uniform, drawing and painting",
                  game: "Super Smash Bros",
                  experience: "As a new member of the Marianopolis Robotics team, i can confidently say that this experience has been extremely memorable from the exhausting early mornings to the crazy laughs we all shared. Working on such a great project pushed us to work as hard as we can to obtain a kiosk that we are all greatly proud of."
                },
                {
                  name: "Vanessa Seraspe",
                  imageUrl: "vanessas.jpg",
                  program: "Health Science",
                  special: "Designing, drawing and painting",
                  game: "Super Mario Bros",
                  experience: "Being part of the Marionopolis Robotics Team for a second year has been great. Building the kiosk has had its challenges, but as a team we easily overcame them. Being able to witness how it evolved in just ten days was worth every single paint stain on my clothes (seriously, they don’t come off). I hope we make the College proud!"
                },
                {
                  name: "Sally Adam",
                  imageUrl: "sallya.jpg",
                  program: "Pure and Applied Science",
                  special: "I can paint inside the lines.",
                  game: "Mario Bros",
                  experience: "I loved working with my teamates during our workdays. It was a great way to make new friends. However, as expected we encountered a few challenges, for example making sure the kiosk structure was stable. Nonetheless, we worked hard as a team and overcame them all."
                },
                {
                  name: "Sophie Deng",
                  imageUrl: "sophied.jpg",
                  program: "Pure and Applied Science",
                  special: "Painting on walls",
                  game: "New super mario bros (D2 lite)",
                  experience: "I liked working on the kiosk a lot, because it was fun and interesting to paint and do the props. I don't normally get to work on such a big project. The most difficult thing to do was wake up really early. I had to sacrifice my sleeping time and free time, but it was worth it because I learned how different things work and got to experience new things."
                },
                {
                  name: "Amanda Morgan",
                  imageUrl: "amandam.jpg",
                  program: "Health Science",
                  special: "Contribution",
                  game: "Mario Kart",
                  experience: "I learned more about building, painting and working in a team."
                },
                {
                  name: "Allyson Fontes",
                  imageUrl: "allysonf.jpg",
                  program: "Pure and Applied Science",
                  special: "Making the moving parts of the kiosk",
                  game: "Super Mario Bros",
                  experience: "Robotics was a lot of fun again this year. However, building and designing the kiosk was no easy task. Stabilizing the walls, making the mechanical parts and painting the background were some of our most challenging jobs."
                }
              ],
              web: [
                {
                  name: "Lawrence Pan",
                  imageUrl: "lawrencep.jpg",
                  program: "Honours Pure and Applied Science",
                  special: "Website Guru",
                  game: "Super Mario Bros",
                  experience: "Overall, being part of the robotics team was a fun experience. I brushed up my web development skill including learning frontend development with AngularJs, using Grunt to automate tasks, etc. However, my most valuable acquisition from this experience is the ability to collaborate with others when working on a large project."
                },
                {
                  name: "Yixuan Wang",
                  imageUrl: "yixuanw.jpg",
                  program: "Pure and Applied Science",
                  special: "Frontend coding and Design",
                  game: "Mario Kart Wii",
                  experience: "Robotic was a great experience overall. I learned a lot concerning web development programming while doing the website. I really liked the free pizza day. Getting up early to go to school during my winter break was the hardest thing ever. It was also really hard to come up with a design for the website."
                },
                {
                  name: "Yuting Jiang",
                  imageUrl: "yutingj.jpg",
                  program: "Health Science",
                  special: "Helping people/No special skill",
                  game: "Mario Kart",
                  experience: "I've learned a lot of things from the robotics club. I was in charge of the journal and media but I also helped around whenever I was asked to. I helped around whenever I could, so I learned a little bit about everything. I’ve sacrificed sleep and precious free time from my winter holidays for the robotics club. I remember, at the end of this journey, I had dark circles under my eyes."
                }
              ],
              vid: [
                {
                  name: "Mahad Janjua",
                  imageUrl: "mahadj.jpg",
                  program: "Honours Health Science",
                  special: "Video Taping",
                  game: "Mario Kart 7",
                  experience: "I learnt more about editing and video taking. I liked talking to and recording the actors that were also on the team; it lead to some funny moments and maybe some bloopers for the video. Also, the video took a lot of time and effort, as well as some retakes of certain scenes. Overall, it was a good time."
                },
                {
                  name: "Fan Chen",
                  imageUrl: "fanc.jpg",
                  program: "Honours Pure and Applied Science",
                  special: "Video",
                  game: "Super Mario 3D World",
                  experience: "I learned more about film production, especially about video editing. It was long to edit because we did so many takes for the video and the files were not organised. I really enjoyed the free pizza."
                },
                {
                  name: "Qi Yue He",
                  imageUrl: "qiyueh.jpg",
                  program: "Honours Health Science",
                  special: "Editing/Animation of video",
                  game: "Mario 3D World",
                  experience: "I learned the importance of communication to be able to understand my teammates' opinions. The difficulties concerning the editing is that we cannot edit in different computers since the files need to be in the same location. In addition, editing on a laptop is really slow. One of the sacrifices is that I was editing mostly at home, during the Christmas break and at night during the work days."
                }
              ]
            }
          }
        }
    });
}]);
