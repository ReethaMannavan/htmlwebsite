// JS169. Fetch data from a JSON file and display it in a dropdown list. 

function getCities(country){
	let countryPlaceholder = document.querySelector("#country");
	let cityPlaceholder = document.querySelector("#city");
	let citiesDropDown = document.querySelector("#cities");

	cityPlaceholder.innerHTML = "";
	countryPlaceholder.innerHTML = "";

	if(country.trim() === ""){
		citiesDropDown.disabled = true;
		citiesDropDown.selectedIndex = 0;
		return false;
	}

fetch("./assets/js/data2.json")
.then(function(response){
  return response.json();
})
.then(function(data){
  let cities = data[country];
  let out = "";
  out += `<option value="">Choose a city</option>`;
  for(let city of cities){
    out += `<option value="${city}">${city}</otion>`;
  }
  citiesDropDown.innerHTML = out;
  citiesDropDown.disabled = false;
  countryPlaceholder.innerHTML = country;
});
}

function getCity(city){
return document.querySelector("#city").innerHTML = city;
}