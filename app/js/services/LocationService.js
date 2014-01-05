define(['jquery'], function() {
	
	function LocationService($q) {
		//return function() {

		var location;
		
		this.getLocation = function() {
			var locationPromise = $q.defer();

			if (location === undefined) {
				$.get('http://freegeoip.net/json/', function(result) {
		      console.log('Location resolved', result);
		      if (result !== undefined && result.country_name !== undefined) {
		      	location = result;
		        locationPromise.resolve(location);
		      }
		    });
			} else {
				locationPromise.resolve(location);
			}
			return locationPromise.promise;
		}
		//}
	}

	return ['$q', LocationService]
})