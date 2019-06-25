$(document).ready(function(){

	$('#button').click(function () {
		$('#modal').addClass('modal_active');
	});

	// $('.price-column__btn').click(function (event) {
	// 	event.preventDefault();
	// 	$('#modal').addClass('modal_active');
	// 	var target = $(this).attr('data-target');
	// 	$('modal-content').load(target+'.html');
	// });

	$('#close').click(function () {
		$('#modal').removeClass('modal_active');
	});

});


