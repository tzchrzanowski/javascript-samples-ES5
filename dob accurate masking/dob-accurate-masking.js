var dob = '12/10/1900';
var dobTab = dob.split('/');
var dobMaskedTab = [];
var temp = [];
var each;

for(var i = 0; i < dobTab.length; i++){
	each = dobTab[i];
	for(var j = 0; j< each.length;j++) temp.push('*');
	var str = temp.join('')
	dobMaskedTab.push(str);
	temp = [];
}
var joined = dobMaskedTab.join('/');

console.log(joined);
// return joined;