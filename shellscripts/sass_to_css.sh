#!/bin/bash

# Convert app/sass/main.scss to assets/css/main.css
sass --watch ../app/sass:../assets/css --sourcemap=none
