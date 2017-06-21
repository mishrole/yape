'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');

	const update = function(){
		render(root);
	}

//	wrapper.append(Screen1(update));

	if(state.screen == null){
		wrapper.append(Screen1(update));
	}else{
		wrapper.append(Screen2());
	}

	root.append(wrapper);
}

const state = {
	screen: null
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


