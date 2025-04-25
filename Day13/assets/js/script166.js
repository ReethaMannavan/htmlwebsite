//  Find an object inside a JSON array based on a property value. 

let studentObj = [
  { 
  "name": "Alice", 
  "age": 15, 
  "city": "New York" 
  },
  { 
      "name": "Daryl", 
      "age": 17, 
      "city": "Los Angels" 
      },
      { 
          "name": "Rick", 
          "age": 21, 
          "city": "California" 
          }
];

let findObj = studentObj.find(a=>a.city==="New York");

console.log(findObj);
