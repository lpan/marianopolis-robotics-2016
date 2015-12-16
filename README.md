# MarioKart 2016
Website for CRC Pythagorium 2016

[![forthebadge](http://forthebadge.com/images/badges/does-not-contain-treenuts.svg)](http://forthebadge.com)

## Table of Contents
1. [About](#about)
2. [CRC Robotics Competition](#crc)
3. [Pages](#pages)
   * [Welcome](#wel)
   * [Home](#home)
   * [Game & College](#game)
   * [Team](#team)
   * [Timeline(robot)](#rob)
   * [Tutorials](#tut)
4. [Marianopolis Robotics](#mari)
5. [License](#lic)

## About This site <a id="about"></a>
##### Written by 
* [Lawrence Pan](http://github.com/lorix-lpan "Lawrence's Github")
* [Yixuan Wang](http://github.com/yixuanwang "Yixuan's Github")

Powered by [angularjs](https://angularjs.org/) and [bootstrap](http://getbootstrap.com/).

For security and and confidentiality purposes, this website is currently 
hosted on a private repository. It will be **opensourced** after the
submission deadline(Feburary 8, 2016).

## Canadian Robotics Competitoin <a id="crc"></a>
The CRC is an annual event in Quebec. For more information, visit their
[website](http://www.robo-crc.ca/en/about/) and
[github](https://github.com/robo-crc)


## Pages <a id="pages"></a>

##### Partials(Things that will stay no matter what)

* NavAssistant(talking mushroom)
* Language Switcher => reassign value to global var $lang


#### Welcome <a id="wel"></a>

* English/French button
* Assign value to global variable $lang

#### Home <a id="home"></a>

* navBar,
* navAssistant(mushroom),
* social media links

#### Team <a id="team"></a>

##### Note: 
* Information of each of the team member will be stored in one single json file
* Data can be iterated by using ng-repeat
* Data file will only be fetched if requested

```javascript
  // Not real code, will be written in json
  // Can be iterated by ng-repeat
  function Member () {
    this.name = 'John Doe';
    this.pic = '/path/to/image.png';
    this.subteam = 'kiosk';
    this.experience = 'bunch of text';
    this.isMentor = false;
  }
```

#### Game & School <a id="game"></a>

* Static page
* May be two pages

#### Robot(timeline) <a id="rob"></a>

1. Steps making the robot
2. Problems encountered + corresponding solutions
3. conception, prototypes, drawing, etc
4. photo of the robot

#### Tutorial <a id="tut" ></a>

* All tutorials will be written in markdown which can be subsequently
  [converted to html on the client side](https://github.com/Hypercubed/angular-marked). 
* There will be a json file contains all the info of articles in the "database".

```javascript
  // Just a demo
  var articles = [
    {
      name: 'How to make your robot happy',
      author: 'Lawrence Pan',
      tag: ['robot', 'happy', 'howto']
      // alternatively, if tags are to complicated
      type: 'robot'
      location: '/path/to/article.md'
    },
    {
      // Another article
    }
  ]
```


## Marianopolis Robotics Team <a id="mari"></a>
> The Marianopolis Robotics Team is a College tradition and a source of pride.

Follow us on [twitter](https://twitter.com/MariRobotics) and check out our 
[github](http://github.com/marianopolis-robotics)!

## License <a id="lic"></a>
MIT License
