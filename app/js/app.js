'use strict';

define(['angular','angular-route'], function(){

  var moduleName = "app";
  var module;
  //var routing;

  function init(angularConfig) {
    module = angular.module(moduleName, ['ngRoute']);

    requirejs(angularConfig.providers, function () { // Load providers (controller, services, etc) from config
      createProviders(arguments);
      createRouting();

      angular.element(document).ready(function() {
        angular.bootstrap(document, [moduleName]);        
      });

      function createProviders(providerList) {
        for(var i=0; i<providerList.length; i++) { // Register controllers
          var name = angularConfig.providers[i];
          name = name.substring(name.lastIndexOf("/") + 1, name.length - 3);

          console.log('typeof ' + name + '=' + typeof providerList[i], providerList[i]);
          if (providerList[i]) {
            var nameU = name.toUpperCase();
            if (nameU.indexOf('CONTROLLER') > -1 || nameU.indexOf('CTRL') > -1)
              module.controller(name, providerList[i]);
            else
              if (nameU.indexOf('SERVICE') > -1 || nameU.indexOf('SRVC') > -1)
                module.service(name, providerList[i]);
              else
                if (nameU.indexOf('FACTORY') > -1)
                  module.factory(name, providerList[i]);
                else
                  if (nameU.indexOf('VALUE') > -1)
                    module.value(name, providerList[i]);
                  else
                    console.log('%c[ERR] Unknown type of provider: ' + name, angularConfig.providers[i]);
          }
        }
      }

      function createRouting() {
        module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
          $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'WelcomeController'});
          $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'MapController'});
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
