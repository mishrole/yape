'use strict';

$(document).ready(_=>{
	$('.carousel.carousel-slider').carousel({fullWidth: true});
});

function Screen1(){
	const container = $('<div class="container"></div>');
	const carousel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');
	const images = ['icon-people', 'happy-person', 'group-people'];
	const title = ['Paga a tus amigos', 'Sin número de cuenta', 'Gratis y seguro'];
	const subtitle = ['Paga a quien quieras desde donde quieras sin usar efectivo'];


	for(var i = 0; i < images.length; i++){

		const imagesContainer = $('<div class="carousel-item" href=" "></div>').append($('<img class="carousel-image '+images[i]+'" src="img/icons/' + images[i] + '.png">'))
		carousel.append(imagesContainer);
	}

	container.append(carousel);
	return container
}