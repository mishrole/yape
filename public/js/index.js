'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function(){
		render(root);
	}

//	wrapper.append(Screen1(update));

//Optimizar y limpiar esto (urgente)

	if(state.screen == null){
		wrapper.append(Screen1(update));
	}else if(state.screen == "screen2"){
		wrapper.append(Screen2(update));
	}else if(state.screen == "screen3"){
		wrapper.append(Screen3(update));
	}else if(state.screen == "screen4"){
		wrapper.append(Screen4(update));
	}else if(state.screen == "screen5"){
		wrapper.append(Screen5(update));
	}

	root.append(wrapper);
}

const state = {
	screen: null,
	data: null,
	user: null,
	code: null,
}

$(_=> {
/*
	$.post('api/registerNumber',
	{
		"phone": "000000000",
		"terms": true
	}, (data) =>{
		
		//state.userid = data//.data.phone;
		
		if(data.success == false){
			console.log(data.message)
		}else{
			console.log(data.data.phone + " " + data.message)
		}
		
	});
*/
	const root = $('.root');
	render(root);

})

/*

$(document).ready(function(){
	$.post('api/registerNumber',
	{
		"phone": "987654611",
		"terms": true
	}, function(data){
		console.log(data)
	});
});

*/


