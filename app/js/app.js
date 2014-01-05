'use strict';

define(['angular','angular-route'], function(){

  var moduleName = "app";
  var module;
  //var routing;

  function init(angularConfig) {
    module = angular.module(moduleName, ['ngRoute']);

    requirejs(angularConfig.controllers, function () { // Load controllers from config
      createControllers(arguments);
      createRouting();

      angular.element(document).ready(function() {
        angular.bootstrap(document, [moduleName]);        
      });

      function createControllers(controllerList) {
        for(var i=0; i<controllerList.length; i++) { // Register controllers
          var controllerName = angularConfig.controllers[i];
          controllerName = controllerName.substring(controllerName.lastIndexOf("/")+1, controllerName.length - 3);
            console.log('typeof '+controllerName+'=' + typeof controllerList[i], controllerList[i]);
          if (controllerList[i]) {
            module.controller(controllerName, controllerList[i]);
          }
        }
      }

      function createRouting() {
        module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
          $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'WelcomeController'});
          $locationProvider.html5Mode(false).hashPrefix('!');
        }]);
      }
    });
  }

  return {
    init: init,
    module: function() {return module;}
  }
})
