//  JS140. Convert a JavaScript object to a JSON string using JSON.stringify() and store it. 

let user = {
    name: "John",
    age: 25,
    city: "New York"
};

let jsonString = JSON.stringify(user);
console.log(jsonString); 
localStorage.setItem('myData',jsonString)