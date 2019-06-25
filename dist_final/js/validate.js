$(document).ready(function () {
	$("#form").validate({
		onkeyup: true,
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phoneNumber: {
				required: true,
			},
		},
		messages: {
			userName: {
				required: "Укажите ваше имя",
				minlength: jQuery.validator.format("Осталось {0} символов"),
				maxlength: "Имя должно содержать не больше 15 символов",
			},
			phoneNumber: {
				required: "Укажите ваш телефон"
			}
		}
	});

	$("#form").submit(function () { //устанавливаем событие отправки для формы с id=form
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
			type: "POST", //Метод отправки
			url: "mail.php", //путь до php фаила отправителя
			data: form_data,
			success: function () {
				//код в этом блоке выполняется при успешной отправке сообщения
				jQuery('#form')[0].reset();
			}
		});
	});
	$("#modal-form").validate({
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phoneNumber: {
				required: true,
			},
		},
		messages: {
			userName: {
				required: "Укажите ваше имя",
				minlength: jQuery.validator.format("Осталось {0} символов"),
				maxlength: "Имя должно содержать не больше 15 символов",
			},
			phoneNumber: {
				required: "Укажите ваш телефон"
			}
		}
	});
});

jQuery(function ($) {
	$("#telNumber").mask("8 (999) 999-99-99");
	$("#phoneNumber").mask("8 (999) 999-99-99");
});