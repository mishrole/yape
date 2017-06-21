'use strict';

function Screen2(){
	const container = $('<div class="container center"></div>');
	const row = $('<div class="row"></div>');
	const imgContainer = $('<div class="col s12"></div>');
	const img = $('<img class="screen2-phone" src="img/icons/phone.png">');
	const textContainer = $('<div class="col s12"></div>');
	const title = $('<p class="title2 bolder">Para comenzar validemos tu número</p>');
	const subtitle = $('<p class="subtitle2 grey-text">Recibirás un SMS con un código de validación</p>');
	const row2 = $('<div class="row"></div>');
	const inputField = $('<div class="input-field col s10 offset-s1"></div>');
	const input = $('<input id="phone" type="text" class="validate">');
	const label = $('<label><img src="img/icons/phoneandnumber.png" class="phoneandnumber"></label>');

	imgContainer.append(img);
	textContainer.append(title);
	textContainer.append(subtitle);
	row.append(imgContainer);
	row.append(textContainer);
	inputField.append(input);
	inputField.append(label);
	row2.append(inputField);
	container.append(row);
	container.append(row2);

	return container;
}