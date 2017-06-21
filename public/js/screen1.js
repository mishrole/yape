'use strict';

$(document).ready(_=>{
	$('.carousel.carousel-slider').carousel({fullWidth: true});
});

function Screen1(update){
	const container = $('<div class="container"></div>');
	const carousel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');
	const images = ['icon-people', 'happy-person', 'group-people'];
	const allTitles = ['Paga a tus amigos', 'Sin número de cuenta', 'Gratis y seguro'];
	const allSubtitles = ['Paga a quien quieras desde donde quieras sin usar efectivo.', 'Elige a quién pagar desde tu lista de contactos.', 'La transferencia es inmediata y gratuita de una cuenta a otra.'];
	const fixed = $('<div class="carousel-fixed-item center"></div>');
	const register = $('<a class="waves-effect waves-light btn">Registrarme</a>');

	for(var i = 0; i < images.length; i++){

		const imagesContainer = $('<div class="carousel-item" href=" "></div>').append($('<img class="carousel-image '+images[i]+'" src="img/icons/' + images[i] + '.png">'))
		const title = $('<p class="title"></p>').append(allTitles[i]);
		const subtitle = $('<p class="subtitle"></p>').append(allSubtitles[i]);
		imagesContainer.append(title);
		imagesContainer.append(subtitle);
		carousel.append(imagesContainer);
	}

	register.on('click', (e) => {
		state.screen = register
		update();
	})

	fixed.append(register);
	carousel.append(fixed);
	container.append(carousel);
	return container
}