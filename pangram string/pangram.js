
/*
var Pangram = function() {
};
Pangram.prototype.isPangram = function(input) {
	if(!input) return false;
	var ascii = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var inputLow = input.toLowerCase()

	for(var i = 0; i<alphabet.length; i++){
		if(inputLow.indexOf(ascii[i])=== -1) return false;
	}
	return true;
};
module.exports = Pangram;

*/

class Pangram {
  constructor(input) {
	this.input = input.toLowerCase();
  }
  

	isPangram(input) {
		var ascii = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  
		for (let i = 0; i < ascii.length; i++) {
			if (this.input.indexOf(ascii[i]) === -1) return false;
		}
		return true;
	}

}
module.exports = Pangram;