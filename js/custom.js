$(document).ready(function() {
	$('.consulting-slider .owl-carousel').owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		loop: true,
		margin: 10,
		nav: true,
		items: 1
	});
	$('#dev-btns .tabs-btn li').on('click', function() {
		$('#dev-btns.service-tabs .tabs-btn li').removeClass('active');
		$(this).addClass('active');
		let getSrc = $(this).data('scr');
		$('#dev-btns .tabs-content .all').hide();
		$('#dev-btns .tabs-content .all' + '.' + getSrc).fadeIn();
	});
	$('#advice-btns .tabs-btn li').on('click', function() {
		$('#advice-btns.service-tabs .tabs-btn li').removeClass('active');
		$(this).addClass('active');
		let getSrc = $(this).data('scr');
		$('#advice-btns .tabs-content .all').hide();
		$('#advice-btns .tabs-content .all' + '.' + getSrc).fadeIn();
	});
	$('#imple-btns .tabs-btn li').on('click', function() {
		$('#imple-btns.service-tabs .tabs-btn li').removeClass('active');
		$(this).addClass('active');
		let getSrc = $(this).data('scr');
		$('#imple-btns .tabs-content .all').hide();
		$('#imple-btns .tabs-content .all' + '.' + getSrc).fadeIn();
	});
});