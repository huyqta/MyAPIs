jQuery("document").ready(function($){

	// var nav = $('.nav-container');

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 136) {
	// 		nav.addClass("f-nav");
	// 	} else {
	// 		nav.removeClass("f-nav");
	// 	}
	// });

	$(".my-slick").slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		fade: true,
		cssEase: 'linear',
		infinite: true,
		speed: 500,
		// dotsClass: 'my-slick-dot'


		// -------------------
		// items:1,
		// loop: true,
		// stagePadding: 0,
		// margin:0,
		// animateIn: 'fadeIn',
		// animateOut: 'fadeOut',
		// touchDrag: false,
		// mouseDrag: false,
		// pullDrag: false,
		// freeDrag: false,
		// dots: false,
		// dotsEach: true,
		// dotsSpeed: 500,
		// autoplay: true,
		// autoplayTimeout: 2000
	});
});
