'use strict';

function Screen1(){
	const container = $('<div class="container carousel-container"></div>');
	const carousel = $('<div class="carousel"></div>');
	const prueba = $('<p>Swipe me</p>');

	const images = ['icon-people', 'happy-person', 'group-people'];
/*	
	$.each(images, function(){

		carousel.append($('<img src="img/icons/' + this + '.png">'));
	}); */

	for(var i = 0; i < images.length; i++){

		const imagesContainer = $('<div class="images-container"></div>').append($('<img class="carousel-image" src="img/icons/' + images[i] + '.png">'))
		carousel.append(imagesContainer);
	}

//	$('.carousel div:last').insertBefore('.carousel div:first');
//	carousel.css('margin-left', '-'+100+'%');

//	carousel.animate({marginLeft:'-'+200+'%'},700,function(){
//		$('.carousel div:first').insertAfter('.carousel div:last');
//		carousel.css('margin-left', '-'+100+'%');
//	});

	container.append(carousel);
	container.append(prueba);
	
$(document).on('pageinit', function(event){
	$(prueba).on('swipeleft', function(){
		alert("Izquierda (next)");
	})
})

	return container
}