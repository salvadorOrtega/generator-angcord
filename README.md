# generator-angcord: Yeoman Angular 6/Cordova hybrid scaffolding tool.

The angcord Yeoman generator scaffolds a project structure that allows you to use both the Angular and Cordova CLIs simultaneously in your projects without additional setup and without conflict.

# Why use it

Other scaffolding solutions for Angular/Cordova projects don't allow you to use the native CLI commands of each tool directly.

Since you have to go through their custom CLI commands, these tools often limit what you can do with the native CLIs.

angcord allows you to use what you already know about Angular and Cordova without worrying about the rest.

# How to use it

* Have cordova installed globally: `npm install -g cordova`
* Have the Angular 6 CLI installed globally: `npm install -g angular/cli`
* Have the yeoman toolset installed globally: `npm install -g yo`. Visit [yeoman.io](http://www.yeoman.io) for more info
* Install angcord! `npm install -g generator-angcord`
* Go to the project folder where you want the scaffolding.
* Run `yo angcord`

Time to `npm install` to get all the dependencies.

Be aware that Cordova will not recognize this folder structure as a Cordova project yet because there's no `www` directory, so

* Run `ng build` to compile the sample Angular 6 code and create it. 

angcord modified the angular.json file to output your compiled code into a `www` directory. Cordova will recognize
this project only when such `www` directory exists. Remember that the `ng serve` Angular CLI command automatically
deletes whatever folder you designated as compilation destination. Make sure the `www` folder exists before running
any Cordova CLI commands.

# Looking for older Angular versions scaffolding?

Visit [NavCore's ngCordova](http://www.github.com/NavCore/ngCordova), on whose folder structure this work updates.
