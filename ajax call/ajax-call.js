		//this init object specifies the method, headers, mode and body of the request
		var initObject = {
		    method: 'POST',
		    headers: new Headers(),
		    mode: 'cors',
		    body: "{}" 
		}

		//creates a new request object using an URL and an init object
		var request = new Request("https://jsonplaceholder.typicode.com/posts",initObject)

		//fetch() method used with a request
		fetch(request).then(function(result){ //result contains a Response object
		    return result.json() 
		    //returns a Promise containing JSON data extracted from the Response object
		}).then(function(result){
		    console.log(result);
		    //logs Object {id: 101}
		}).catch(function(err){
		    console.log(err);
		});