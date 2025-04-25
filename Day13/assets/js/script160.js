// JS160. Create a JSON file (data.json) and fetch it using JavaScript. 

fetch("./assets/js/data.json")
.then(response=>response.json())
.then(data=>console.log(data));
