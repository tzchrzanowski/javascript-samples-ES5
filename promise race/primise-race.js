		var promise1 = new Promise(function(resolve,reject){
		    setTimeout(function(){
		        resolve("finished in two seconds");
		    },2000) //returns a resolved promise after 2 seconds
		});

		var promise2 = new Promise(function(resolve,reject){
		    setTimeout(function(){
		        resolve("finished in five seconds");
		    },5000) //returns a resolved promise after 5 seconds
		});

		Promise.race([promise1,promise2]).then(function(result) { 
		    console.log(result) // logs "finished in two seconds" because promise1 resolved first
		}).catch(function(error){
		    console.log(error)  
		});