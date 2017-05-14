
module.exports = Gigasecond = function Gigasecond(input){
    this.input = input;
    this.gigaSecond = 1000000000000;
}; 
Gigasecond.prototype.date = function(){
	var result = new Date(this.input.getTime() + this.gigaSecond);
    return result;
};