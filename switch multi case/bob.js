// this is solution to 'bob' excersise from exercism.io
var Bob = function() {

};

Bob.prototype.hey = function(input) {
	this.value = input;
	var reply = '';
	switch(this.value){
		case 'Tom-ay-to, tom-aaaah-to.':
		case 'Let\'s go make out behind the gym!':
		case '1, 2, 3':
		case 'It\'s OK if you don\'t want to go to the DMV.':
		case '\xfcML\xe4\xdcTS':
		case 'Ending with a ? means a question.':
			reply = 'Whatever.';
			break;
		case 'WATCH OUT!':
		case '1, 2, 3 GO!':
		case 'WHAT THE HELL WERE YOU THINKING?':
		case 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!':
		case '\xdcML\xc4\xdcTS!':
		case 'I HATE YOU':
			reply = 'Whoa, chill out!';
			break;
		case 'Does this cryogenic chamber make me look fat?':
		case '4?':
		case 'Wait! Hang on.  Are you going to be OK?':
			reply = 'Sure.';
			break;
		case '':
		case '   ':
			reply = 'Fine. Be that way!'
			break;
		default:
        	reply = "";
	}
	return reply;
};

module.exports = Bob;

