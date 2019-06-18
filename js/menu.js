function resize() {
	var menu = $('header .header-block .navigation__nav');
	var header = $('header');
	var widthHead = header.width();
	if (widthHead < 767) {
		menu.css({
			'display': 'none'
		});
		header.addClass('header_mobile');
	} else {
		menu.css({
			'display': 'flex'
		});
		header.removeClass('header_mobile');
	}
}
resize();

$(window).resize(function () {
	resize();
});

$('.hamburger').click(function () {
	element = $('.navigation__nav');
	display = element.css('display');
	if (display == 'none')
		$('.navigation__nav').slideDown(400);
	if (display == 'block')
		$('.navigation__nav').slideUp(400);
});

$('.navigation__nav a').click(function () {
	var header = $('header');
	var widthHead = header.width();
	if (widthHead < 767)
		$('.menu').slideUp(400);
});