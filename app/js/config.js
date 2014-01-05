define([], {

	angular: {
		controllers: ['js/controllers/WelcomeController.js']
	},

	requirejs: {
		paths: {
	      'domReady': 'lib/requirejs-domready/domReady',
	      'jquery': 'lib/jquery/jquery',
	      'angular': 'lib/angular/angular',
	      'angular-route': 'lib/angular-route/angular-route'
		},

		  // angular does not support AMD out of the box, put it in a shim
		shim: {
	  	'angular': ['jquery'],
		  'angular-route': ['angular']
		  
		}
	}
});
