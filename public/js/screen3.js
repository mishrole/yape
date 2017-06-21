'use strict';

function Screen3(update){
	const container = $('<div class="container center"></div>');
	const row = $('<div class="row"></div>');
	const imgContainer = $('<div class="col s12"></div>');
	const img = $('<img class="small-image" src="img/icons/message.png">');
	const textContainer = $('<div class="col s12"></div>');
	const title = $('<p class="title2 bolder">Ahora ingresa tu código</p>');
	const subtitle = $('<p class="subtitle2 grey-text">Enviamos un SMS con el código de validación al número '+ '<span class="bolder">'+state.user+'</span>'+'</p>');
	const row2 = $('<div class="row"></div>');

	imgContainer.append(img)
	row.append(imgContainer);

	textContainer.append(title);
	textContainer.append(subtitle);
	row2.append(textContainer);
	container.append(row);
	container.append(row2);

	return container;
}