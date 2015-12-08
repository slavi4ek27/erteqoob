$(document).ready(function() {
	
	//  mobile menu toggle button
	$(".menu_button").click(function() {
		$(this).find("~ ul").stop().slideToggle()
	});
	//  mobile menu toggle button end
	
	
	//	popup gallery
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	//	popup gallery end
	
	//	teachers slider
	$('.bxslider').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		pager: false
	});
	//	teachers slider end
	
	//	cost slider
	$('.bxslider_2').bxSlider({
		pagerCustom: '#bx-pager'
	});
	//	cost slider end
	
	//	popup video play
	$(".how_we_play_video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '80%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	//	popup video play end
	
	//	scrollup button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	//	scrollup button end
	
	//	inserted tabs 		
	$(function() {

		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
			$(this).addClass('current').siblings().removeClass('current')
				.parents('div.tabs-content').eq(0).find('>div.box').hide().eq($(this).index()).fadeIn(500).show();
		})

		var tabIndex = window.location.hash.replace('#tab','')-1;
		if (tabIndex != -1) $('ul.tabs li').eq(tabIndex).click();

		$('a[href*=#tab]').click(function() {
			var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
			$('ul.tabs li').eq(tabIndex).click();
		});

	});
	//	inserted tabs end		
		
});



//  black map
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
};
//  black map end