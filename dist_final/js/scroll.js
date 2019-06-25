$(document).ready(function () {
	$(".navigation__item").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	var curr_el_index = 0;
	var els_length = $(".scroll").length;

	$('.btnNext').click(function () {
		curr_el_index++;
		if (curr_el_index >= els_length) curr_el_index = 0;
		$("html, body").animate({
			scrollTop: $(".scroll").eq(curr_el_index).offset().top - 20
		}, 700);
	});
	$('.btnPrev').click(function () {
				curr_el_index--;
				if (curr_el_index < 0) curr_el_index = els_length - 1;
				$("html, body").animate({
					scrollTop: $(".scroll").eq(curr_el_index).offset().top - 20
				}, 700);
	});
	// Показывать карту только когда докрутили до нее
	var feed = $('.feedback');
	var feedTop = feed.offset().top;
	$(window).bind('scroll', (function() {
		var windowTop = $(this).scrollTop();
		if (windowTop > feedTop) {
			$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A43da537aa34abedd957c69c6a468f275571c16b11f4695f774159f856b8ff6bd&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>')
			$(window).unbind('scroll');
		}
	}))
});