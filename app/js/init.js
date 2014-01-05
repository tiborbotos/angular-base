// init of the application

requirejs.config({baseUrl:"./"});

requirejs(['js/config'], function(config){
  'use strict';

  requirejs.config(config.requirejs);


  require(['js/app'], function(app) {

    console.log('starting application');
    // TODO
    // load localization

    app.init(config.angular);
  });

});