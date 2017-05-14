var DnaTranscriber = function() {

};

DnaTranscriber.prototype.toRna = function(input) {
	this.value = input;
	
	/*

	*/
	var tableIn = [];

	if(this.value.length==1){
		if(this.value == 'C'){
			this.value = 'G';
		}else if(this.value == 'G'){
			this.value = 'C';
		}else if(this.value == 'A'){
			this.value = 'U';
		}else if(this.value == 'T'){
			this.value = 'A';
		}
		return this.value;
	}else if(this.value != "C" || "G" || "A" || "T"){
				throw Error('Invalid input');
	}else if(this.value.length > 1){	
		tableIn = this.value.split("");
		for(var i = 0; i < tableIn.length; i++){
			if(tableIn[i] != "C" || "G" || "A" || "T"){
				throw Error('Invalid input');
			}
		}
	}
	
	//var result = this.value.join();

};

module.exports = DnaTranscriber;

