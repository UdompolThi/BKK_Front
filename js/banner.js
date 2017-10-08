$(document).on('ready', function() {
  	$('.bannerImageSlider').slick({
  		speed: 500,
  		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		asNavFor: '.bannerTextSlider',
		draggable: true
	});
	$(".bannerTextSlider").slick({
		speed: 500,
  		fade: true,
		dots: false,
		infinite: true,
		asNavFor: '.bannerImageSlider',
		draggable: true,
		prevArrow: $('.bannerArrowLeft'),
		nextArrow: $('.bannerArrowRight')
	});
});