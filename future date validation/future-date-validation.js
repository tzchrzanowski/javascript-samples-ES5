console.log("node output: \n");

var msg = 'Please enter a valid expiration date';
var month = 10; // value in question. you can use input field value here.
var year = 2018; // value in question. you can use input field value here.
var dateInput = month + '/'+ year;
var result = /^(0?[1-9]|1[0-2])\/(19|20)\d{2}$/.test(dateInput);

if (result) {
  var dateVal = dateInput.split('/');
  	var date = new Date(dateVal[1], dateVal[0]-1);
    if (date.getFullYear() != dateVal[1] || date.getMonth()+1 != dateVal[0]) {
        result = false;
    }
}
if (result) {
	var now = new Date();
	now.setHours(0,0,0);
	date.setHours(0,0,1);
	if(date < now){
		result = false;
	}
}
console.log(result);

if(result == false) return result, msg; 
return result;  // result is either true or false
