# Website Performance Optimization portfolio project

This project is a part of Udacity's Front End Web Developer Nano Degree. The objective of this project is to optimize Cam's portfolio website to get a PageSpeed score of above 90 and to make the Cam's Pizzeria page run at 60 frames per second.

## How to run
The source code is in the src/ directory. The production code is in the dist/ directory except the production index.html file which is in the project root directory so that it can be hosted to GitHub Pages.

### To build the project
* Open the Terminal or Command Prompt in the root directory.
* Run "npm init" to install all the packages.
* Run "grunt" to build the project.
* Open the index.html file.

### To access the website
The website has already been hosted on GitHub Pages, so running a local server with tunneling is not necessary.
The website can be accessed [here](https://shad-k.github.io/frontend-nanodegree-mobile-portfolio/).
The PageSpeed Insight results are [here](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fshad-k.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile).

## Changes and Optimizations made
* Added package.json to manage packages using npm.
* Changed the directory structure, segregating the development code from production code.
* Integrated grunt to for build-time automation.
* Grunt tasks minify the CSS, JS and HTML and inlined the critical CSS into the production index.html file.
* Added node_modules to .gitignore.
* Optimized and resized pizzeria.jpg and profilepic.jpg.
* In pizza.html edited the updatePositions function to avoid forced synchronous layout.
* Also removed code causing forced synchronous layout from resizePizzas.
* Reduced the number of moving pizzas to speed up page load.
