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
                experience: ""
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
