//  JS141. Convert a JSON string back to a JavaScript object using JSON.parse() and use it. 

let jsonString = 	'{"name":"John","age":25,"city":"New York"}';

let userObject = JSON.parse(jsonString);

console.log(userObject);
