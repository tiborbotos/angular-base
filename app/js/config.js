define([], {

	angular: {
		providers: ['js/controllers/WelcomeController.js',
			'js/controllers/MapController.js',
			'js/services/LocationService.js']
	},

	requirejs: {
		paths: {
	      'domReady': 'lib/requirejs-domready/domReady',
	      'jquery': 'lib/jquery/jquery',
	      'angular': 'lib/angular/angular',
	      'angular-route': 'lib/angular-route/angular-route',
	      'yepnope': 'lib/yepnope/yepnope'
		},

		  // angular does not support AMD out of the box, put it in a shim
		shim: {
	  	  'angular': ['jquery'],
		  'angular-route': ['angular']
		  
		}
	}
});
