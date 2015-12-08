google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(50.000188, 36.247226),
		styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(49.993319, 36.232671),
		map: map,
	});
}