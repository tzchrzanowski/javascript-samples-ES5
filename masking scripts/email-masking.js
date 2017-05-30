var firstEmail = "johnDoe@email.com";
var emailValue = firstEmail.split("@");

var loginNameTab = emailValue[0].split('');
for(var i = 0; i < loginNameTab.length-1; i++){
	if(i>0 && i < loginNameTab.length-1) loginNameTab[i] ="*";		
}
var maskedLogin = loginNameTab.join('');
var result = maskedLogin+ "@"+ emailValue[1];

console.log(result);
return result;