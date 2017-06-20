'use strict';

$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });


function Screen1(){
	const container = $('<div class="container"></div>');
	const carousel = $('<div class="carousel carousel-slider"></div>');

	const images = ['icon-people', 'happy-person', 'group-people'];
/*	
	$.each(images, function(){

		carousel.append($('<img src="img/icons/' + this + '.png">'));
	}); */

	for(var i = 0; i < images.length; i++){

		const imagesContainer = $('<a class="carousel-item" href="#"></a>').append($('<img class="carousel-image" src="img/icons/' + images[i] + '.png">'))
		carousel.append(imagesContainer);
	}

	container.append(carousel);
	return container
}
/*
function carousel(){

	$('.carousel div:last').insertBefore('.carousel div:first');
	carousel.css('margin-left', '-'+100+'%');

	function next(){

		carousel.animate({marginLeft:'-'+200+'%'},700,function(){
			$('.carousel div:first').insertAfter('.carousel div:last');
			carousel.css('margin-left', '-'+100+'%');
		});

	}

	function previous(){
		carousel.animate({marginLeft:0},700,function(){
			$('.carousel div:last').insertBefore('.carousel div:first');
			carousel.css('margin-left', '-'+100+'%');
		});
	}

	$('.carousel-image').on('swipeleft', function(){
		next();
	});
}

$(document).ready(function(){

	$('div.prueba').on('swipeleft', swipe);

	function swipe(event){
		$(event.target).addClass('swipe');
	};
})
*/