$(function(){

	$('#nome').blur(function(){
		const patt = /[A-Za-z]/g;
		var result = patt.test($(this).val());
		if(result)				
			return $(this).parent().addClass('input-wrapper-active');
		return $(this).parent().removeClass('input-wrapper-active');
	});

	$('#email, #email-login, #email-rec').blur(function(){
		const patt = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g;
		var result = patt.test($(this).val());
		if(result)				
			return $(this).parent().addClass('input-wrapper-active');
		return $(this).parent().removeClass('input-wrapper-active');
	});

	$('#telefone').blur(function(){
		const patt = /^(\([0-9]{2}\))\s?([9]{1})?\s?([0-9]{4})-([0-9]{4})$/g;
		var result = patt.test($(this).val());
		if(result)				
			return $(this).parent().addClass('input-wrapper-active');
		return $(this).parent().removeClass('input-wrapper-active');
	});

	$('#senha-login').blur(function(){
		if($(this).val().length) 
			return $(this).parent().addClass('input-wrapper-active');
		return $(this).parent().removeClass('input-wrapper-active');
	});

	$('#repetida-senha').blur(function(){
		let senha = $('#senha');
		let senha_repetida = $(this);

		if(!senha_repetida.val().length) return;

		if(senha.val() == senha_repetida.val()){
			senha.parent().addClass('input-wrapper-active');
			senha_repetida.parent().addClass('input-wrapper-active');
		} else {
			senha.parent().removeClass('input-wrapper-active');
			senha_repetida.parent().removeClass('input-wrapper-active');
		}
	});

});