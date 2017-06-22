'use strict';

function Screen3(update, clear){
	const container = $('<div class="container center"></div>');
	const row = $('<div class="row"></div>');
	const imgContainer = $('<div class="col s12"></div>');
	const img = $('<img class="small-image" src="img/icons/message.png">');
	const textContainer = $('<div class="col s12"></div>');
	const title = $('<p class="title2 bolder">Ahora ingresa tu código</p>');
	const subtitle = $('<p class="subtitle2 grey-text">Enviamos un SMS con el código de validación al número '+ '<span class="bolder">'+state.user+'</span>'+'</p>');
	const row2 = $('<div class="row"></div>');
	const row3 = $('<div class="row"></div>');
	const inputField = $('<div class="input-field col s10 offset-s1"></div>');
	const input = $('<input id="code" type="text" class="validate center-align" autocomplete="off">');
	const label = $('<label class="label-icon" for="code"><img src="img/icons/lock.png" class="img-extra-small"></label>');
	const span = $('<span></span>');
	const p = $('<p>Reintentar en </p>');
	const clock = $('<img src="img/icons/clock.png" class="img-extra-small">');

	imgContainer.append(img)
	row.append(imgContainer);
	textContainer.append(title);
	textContainer.append(subtitle);
	row2.append(textContainer);
	inputField.append(input);
	inputField.append(label);
	p.append(clock);
	p.append(span);
	inputField.append(p);
	row3.append(inputField);
	container.append(row);
	container.append(row2);
	container.append(row3);

	let interval;

	function countdown(span){
		const phone = state.user
		let counter = 22;
		interval = setInterval(function() {
			counter--;
			if (counter >= 0) {
				span.text(' ' + counter);
			}

			if (counter === 0) {
				$.post('api/resendCode',
				{
					"phone": phone,
				}, (data) => {
					state.code = data.data
					console.log(state.code)
				});

				countdown(span);
			}
		}, 1000);
	}

	function clear(){
		clearInterval(interval);
	}

	countdown(span);

	input.on('keyup', () => {

		const dataInput = input.val();

		if(dataInput == state.code){
			state.screen = "screen4"
			update();
			clear();
		}
	})

	return container;
}