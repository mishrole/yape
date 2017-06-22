'use strict';

function Screen4(update){
	const container = $('<div class="container center"></div>');
	const row = $('<div class="row"></div>');
	const imgContainer = $('<div class="col s12"></div>');
	const img = $('<img class="small-image" src="img/icons/lockone.png">');
	const row2 = $('<div class="row"></div>');
	const textContainer = $('<div class="col s12"></div>');
	const title = $('<p class="title2 bolder">Crea tu usuario Yape</p>');
	const subtitle = $('<p class="subtitle2 grey-text">Ingresa un nombre, email y clave de usuario.</p>');
	const row3 = $('<div class="row"></div>');
	const form = $('<form class="col s12></form>');
	const divName = $('<div class="input-field col s10 offset-s1"></div>');
	const inputName = $('<input id="name" type="text" class="validate center-align" autocomplete="off" placeholder="Nombre">');
	const labelName = $('<label class="label-icon" for="name"><img src="img/icons/user.png" class="img-extra-small"></label>');
	const divEmail = $('<div class="input-field col s10 offset-s1"></div>');
	const inputEmail = $('<input id="email" type="email" class="validate center-align" autocomplete="off" placeholder="correo@ejemplo.com">');
	const labelEmail = $('<label class="label-icon" for="email"><img src="img/icons/message-gray.png" class="img-extra-small"></label>');
	const divPassword = $('<div class="input-field col s10 offset-s1"></div>');
	const inputPassword = $('<input id="password" type="password" class="validate center-align" autocomplete="off" placeholder="Ingresa clave de 6 dígitos">');
	const labelPassword = $('<label class="label-icon" for="password"><img src="img/icons/lock.png" class="img-extra-small"></label>');
	const message = $('<span class="grey-text">Cuida esta clave como oro, es tu acceso a Yape.</span>');
	const row4 = $('<div class="row"></div>');
	const create = $('<a class="waves-effect waves-light btn next col s6 offset-s3" disabled="true">Crear cuenta</a>');

	imgContainer.append(img)
	row.append(imgContainer);
	textContainer.append(title);
	textContainer.append(subtitle);
	row2.append(textContainer);
	divName.append(inputName);
	divName.append(labelName);
	divEmail.append(inputEmail);
	divEmail.append(labelEmail);
	divPassword.append(inputPassword);
	divPassword.append(labelPassword);
	divPassword.append(message);
	row3.append(divName);
	row3.append(divEmail);
	row3.append(divPassword);
	row4.append(create);
	container.append(row);
	container.append(row2);
	container.append(row3);
	container.append(row4);

	inputPassword.on('keyup', () => {

		const name = inputName.val();
		const email = inputEmail.val();
		const password = inputPassword.val();

		if(name.length != 0 && email.length != 0 && (password.length > 5 && password.length < 7)){
			create.attr('disabled', false);
		}else{
			create.attr('disabled', true);
		}
	})

	return container;

}