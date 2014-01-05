define([], function(){

	return ['$scope', function($scope) {
			var context = this;
			$scope.hello = 'Hello!';
			$scope.counter = 0;

			$scope.increase = function() {
				$scope.counter += 1;
			}

			return this;
	}];
	
});
