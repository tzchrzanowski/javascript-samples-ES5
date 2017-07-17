var selectedCountry = // dropdown value of selected country
var countriesNew = // ref to json file with list of coutnries

countriesNew = countriesNew.filter( function(el){
	return el.value != selectedCountry;
});

return countriesNew;
