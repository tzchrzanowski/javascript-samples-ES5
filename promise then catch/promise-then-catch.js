	$(document).ready(function(){
	//--------------------------
		var promise = new Promise(function(resolve, reject) {
			setTimeout( function(){
				var val = Math.random();
				if( val > .5){
					resolve(val);
				} 
				else {
					reject(val);
				}
			}, 5000)
		});

		promise.then( function(val){
			console.log("success :" + val)
		}).catch( function(err){
			console.log("failure :" + err)
		})
//---------------------------------------------
});

