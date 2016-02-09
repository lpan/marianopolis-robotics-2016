# Mario-nopolis 2016
Website for CRC Pythagorium 2016

* Synced with this Git Repo: [robotics.lawrencepan.work](http://robotics.lawrencepan.work)
* Site submitted to the CRC judges: [robotics.marianopolis.edu](http://robotics.marianopolis.edu)

[![forthebadge](http://forthebadge.com/images/badges/does-not-contain-treenuts.svg)](http://forthebadge.com)

## Installation Guide
Make sure:
* You have npm and ruby installed
* Port 3000 is free

On your command line:
* $ gem install compass
* $ git clone https://github.com/lorix-lpan/marianopolis-robotics-2016
* $ cd marianopolis-robotics-2016
* $ npm install
* $ bower install
* $ npm start

visit localhost:3000 on your browser

Note: npm start will invoke the gulp script. For production, after all tasks are
completed, simply press ctrl-c to stop the server.

## About This site <a id="about"></a>
##### Written by
* [Lawrence Pan](http://github.com/lorix-lpan "Lawrence's Github")
* [Yixuan Wang](http://github.com/yixuanwang "Yixuan's Github")

Powered by [angularjs](https://angularjs.org/) and [bootstrap](http://getbootstrap.com/).

For security and and confidentiality purposes, this website is currently
hosted on a private repository. It will be **opensourced** after the
submission deadline(Feburary 8, 2016).

### Features
* Responsiveness
  * All units are either in em or %
  * Supports devices from 7' tablets (landscape mode) to standard size desktop
    monitors
* Smooth Transition
  * No need to refresh when switching between pages
  * Text is seperated from the template => No need to refresh when changing
    languages

### Bugs and Issues
* Iframe elements does not follow Z-index rule on IE on Windows 7 => Navigation
  map is hidden by the youtube video on "Gallery" and "Game"
* Youtube API constantly polling for cast.js => It is one of the known bugs
  which indeed does not affect user experience but logs error messages on
  the console.

## Canadian Robotics Competitoin <a id="crc"></a>
The CRC is an annual event in Quebec. For more information, visit their
[website](http://www.robo-crc.ca/en/about/) and
[github](https://github.com/robo-crc)


## Marianopolis Robotics Team <a id="mari"></a>
> The Marianopolis Robotics Team is a College tradition and a source of pride.

Follow us on [twitter](https://twitter.com/MariRobotics) and check out our
[github](http://github.com/marianopolis-robotics)!
Don't forget to like our [facebook](https://www.facebook.com/crcteam006/?fref=ts) page as well!

## License <a id="lic"></a>
MIT License
