define(['yepnope'], function(){

	var gApiLoaded = false;
	function loadGoogleAPI(onComplete) {
		if (gApiLoaded) {
			onComplete();
		} else {
			gApiLoaded = true;
			yepnope({
					load: ['https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=MapController.maploaded'],
						/*['https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCeH-0uAj7TmErUst2q5blMJz7jnqXCoAg' +
						'&sensor=false'+
						'&callback=MapController.maploaded'+
						'&libraries=places'],*/
					complete: onComplete
				});
		}
	}

	//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
	return ['$scope', 'LocationService', function($scope, LocationService) {
			var context = this;
			var _googleMapApiInitialized;
			var _browserLocation;
			var autocomplete;
			var map;

			$scope.initalizing = true;

			init();

			// public API for communication between google api
			window.MapController = {
				maploaded: function() { // callback, run after google maps API has been initalized - must be set in gapi script url
					console.log('Google API loaded, initalized!');
					_googleMapApiInitialized = true;
					createMap();
				}
			}

			function init() {
				console.log('Loading maps API');
				loadGoogleAPI();
				LocationService.getLocation().then(function(result) { 
					_browserLocation = result;
					createMap(); 
				});
			}

			function createMap() {
				if (_googleMapApiInitialized === true && typeof _browserLocation !== 'undefined') {

					var mapOptions = {center: new google.maps.LatLng(_browserLocation.latitude, _browserLocation.longitude), zoom: 10};
		    	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		    	var input = $('pac-input');
					autocomplete = new google.maps.places.Autocomplete(/** @type {HTMLInputElement} */(document.getElementById('pac-input')), 
						{ types: ['(cities)'] });
  				google.maps.event.addListener(autocomplete, 'place_changed', addressChanged);
		    	$scope.initalizing = false;
				}
			}

			function addressChanged() {
				var place = autocomplete.getPlace();
				console.log('place changed', place);
			}

			return this;
	}];
	
});
