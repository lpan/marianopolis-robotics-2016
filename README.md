# MarioKart 2016
Website for CRC Pythagorium 2016

### Marianopolis Robotics Team
* [twitter](https://twitter.com/MariRobotics)
* [github](http://github.com/marianopolis-robotics)

## Table of Contents
1. [About](#about)
2. [CRC Robotics Competition](#crc)
3. [Pages](#pages)
      * Welcome
      * Home
      * About College
      * Team
      * Timeline(robot)
      * Tutorials
4. [Directory structure](#dir)
5. [Algorithms](#algorithms)

## About This site <a id="about"></a>
##### Written by 
* [Lawrence Pan](http://github.com/lorix-lpan "Lawrence's Github")
* [Yixuan Wang](http://github.com/yixuanwang "Yixuan's Github")

This website has no backend. It is built strictly following the [DRY
principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
with [angularjs](https://angularjs.org/) and [bootstrap](http://getbootstrap.com/) 
frameworks. Check out the [algorithms]() section of this doc for more details.

For security and and confidentiality purposes, this website is currently 
hosted on a private repository. It will be **opensourced** after the
submission deadline(Feburary 8, 2016).

## Canadian Robotics Competitoin <a id="crc"></a>
The CRC is an annual event in Quebec. For more information, visit their
[website](http://www.robo-crc.ca/en/about/) and
[github](https://github.com/robo-crc)


## Pages <a id="layouts"></a>

##### Partials(Things that will stay no matter what)

* NavAssistant(talking mushroom)
* Language Switcher => reassign value to global var $lang


#### Welcome

```javascript
   include: {
     buttons: [English, French]
   }
   mainPurpose: "Assign value to global var $LANG"
```

#### Home

```javascript
  include: [ 
             navBar,
             navAssistant(mushroom),
             social media links
           ],
  mainPurpose: "Home page"
```

#### Team

##### Note: 
Instead of hardcoding the team page, information of each of the team
member will be stored in one single json file as raw data which will only be fetched and
iterated if requested.

```javascript
  // Just a demo
  // In Json format
  // Can be iterated by ng-repeat
  function Member () {
    this.name = 'John Doe';
    this.pic = '/path/to/image.png';
    this.subteam = 'kiosk';
    this.experience = 'bunch of text';
    this.isMentor = false;
  }
```

#### Game

```javascript
  static: true
  mainPurpose: "Explanation of the game"
```
