# AngularBase
*By [@tiborbotos]*

## About
This project is a skeleton for AngularJS applications on Node and Grunt. The intent is to provide a skeleton project without any boilerplate setup.

Including:

* file organization
* compilation of [LESS](http://lesscss.org/) files
* live file realoading with [WATCH](https://github.com/gruntjs/grunt-contrib-watch)
* bower dependency management
* a server to run the application

It also contains a middleware so you can use a mocked backend for your application. 

## Prerequisites
* Must have [Git](http://git-scm.com/) installed
* Must have [node.js (at least v0.10.21)](http://nodejs.org/) installed with npm (Node Package Manager)
* Must have [Grunt](http://gruntjs.com/) node package installed globally.  `npm install -g grunt-cli`

## Install Angular Fun
Enter the following commands in the terminal.

1. `git clone git://github.com/CaryLandholt/AngularFun.git`
2. `cd AngularFun`
3. `npm install`

## Compile the project

`grunt server` - will compile the less files and start the server

## Making Changes
The server task will watch for any file changes.  When changes are detected the browser will automatically refresh.

## Running Tests
Not yet added

## To-Do
* Setup tests
