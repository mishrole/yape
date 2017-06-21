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
	const input = $('<input id="phone" type="text" class="validate center-align" autocomplete="off">');
	const label = $('<label class="label-icon" for="phone"><img src="img/icons/phoneandnumber.png" class="phoneandnumber"></label>');
	const span = $('<span></span>');
	const checkbox = $('<input type="checkbox" id="terms" class="filled-in">');
	const labelCheckbox = $('<label for="terms">Acepto los <a>Términos y condiciones.</a></label>');
	const row3 = $('<div class="row continue"></div>');
	const next = $('<a class="waves-effect waves-light btn next col s6 offset-s3" disabled="true">Continuar</a>');

	imgContainer.append(img);
	textContainer.append(title);
	textContainer.append(subtitle);
	row.append(imgContainer);
	row.append(textContainer);
	inputField.append(input);
	inputField.append(label);
	row2.append(inputField);
	span.append(checkbox);
	span.append(labelCheckbox);
	row2.append(span);
	row3.append(next);
	container.append(row);
	container.append(row2);
	container.append(row3);

	input.on('keyup', (e) => {

		const dataInput = input.val();

		if(dataInput.length == 9){
			if((checkbox).prop('checked') == true){
				next.attr('disabled', false);
			}else{
				next.attr('disabled', true);
			}
		}else{
			next.attr('disabled', true);
		}

	})
/*
		labelCheckbox.on('click', (e) => {
			if((checkbox).prop('checked')){
				alert("true, se desmarca")
				console.log((checkbox).prop('checked'))
			}else{
				console.log((checkbox).prop('checked'))
				alert("false, se marca")
			}
		})	
		labelCheckbox.on('click', (e) => {
			if((checkbox).prop('checked') == false){
				console.log((checkbox).prop('checked'))
			}
		})
		*/
/*
	let verifyTerms;

	labelCheckbox.on('click', (e) => {

		if((checkbox).prop('checked') == false){
			verifyTerms = true;
		}else{
			verifyTerms = false;
		}
	})

	*/
/*
	input.on('keyup', (e) => {

		const dataInput = input.val();

		if(dataInput.length == 9 && (checkbox).prop('checked') == true){
			next.attr('disabled', false);
			console.log((checkbox).prop('checked'))
		}else if((checkbox).prop('checked') == false){
			next.attr('disabled', true);	
			console.log((checkbox).prop('checked'))
		}
		
	})

	*/



	return container;
}