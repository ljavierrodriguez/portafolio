$(function(){
	$('.galeria .contenedor-imagen').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src', ruta_imagen);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	});
})

var form = document.getElementsByClassName('formulario');
form[0].addEventListener('submit', function(evt){
	var nombre = form[0].nombre;
	var email = form[0].email;
	var mensaje = form[0].mensaje;
	if(nombre.value=='' || nombre.value == 'Ingrese Nombre'){
		evt.preventDefault();
		nombre.value = 'Ingrese Nombre';
		nombre.style.color = 'red';
		nombre.style.border = '1px solid red';
		nombre.focus();
	}else if(email.value == '' || email.value == 'Ingrese Email'){
		evt.preventDefault();
		email.value = 'Ingrese Email';
		email.style.color = 'red';
		email.style.border = '1px solid red';
		email.focus();
	}else if(mensaje.value == '' || mensaje.value == 'Ingrese Mensaje'){
		evt.preventDefault();
		mensaje.value = 'Ingrese Mensaje';
		mensaje.style.color = 'red';
		mensaje.style.border = '1px solid red';
		mensaje.focus();
	}
});

var mensaje = document.getElementById('mensaje');
var caracteresMaximo = 140;
mensaje.addEventListener('keypress', function(evt){
	// Obtenemos la teclas pulsada
	var caracter = evt.charCode || evt.keyCode;

	// Permitir la teclas de flechas horizontal
	if(caracter == 37 || caracter == 39){
		return true;
	}
	// Permitir Borrar con la tecla Backspace y la tecla Supr
	if(caracter == 8 || caracter == 46){
		return true;
	}else if(this.value.length >= caracteresMaximo){
		evt.preventDefault();
	} 
});

mensaje.addEventListener('keyup', function(){
	var info = document.getElementsByClassName('infoCaract');

	if(this.value.length >= caracteresMaximo) {
		info[0].innerHTML = "Máximo " + caracteresMaximo + " caracteres";
	}
	else {
		info[0].innerHTML = "Puede escribir hasta " + (caracteresMaximo - this.value.length) 
		+ " caracteres";
	}
});