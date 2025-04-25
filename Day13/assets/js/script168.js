// JS168. Remove a specific object from an array inside a JSON file. 

fetch("./assets/js/data1.json")
.then(response=>response.json())
.then(data=>console.log(data));


let ind = data.findIndex(obj => obj.Name === "John");
if (ind !== -1) {
    data.splice(ind, 1);
}
console.log(data);