'use strict';

const render = (root) => {
	root.empty();
	root.append(Screen1());
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


