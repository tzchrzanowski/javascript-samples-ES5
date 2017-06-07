var a = '123456789'.split('');
var b = '123456780'.split('');
var differences = 0;
var result;

for ( var i = 0; i < a.length; i++){
  if(a[i] !== b[i]) differences++ 
}

if(differences > 1) result = false; else result = true;

console.log(result);
return result;

