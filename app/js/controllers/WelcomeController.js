define([], function(){

	return ['$scope', '$location', function($scope, $location) {
			var context = this;
			$scope.hello = 'Hello!';
			$scope.counter = 0;

			$scope.increase = function() {
				$scope.counter += 1;
			}

			$scope.openMap = function() {
				$location.path('map');
			}

			return this;
	}];
	
});
