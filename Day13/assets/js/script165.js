// Sort an array of objects stored in JSON by a specific property (e.g., price, age).


let studentObj = [
    { 
        "name": "Daryl", 
        "age": 17, 
        "city": "Los Angels" 
        },
    { 
    "name": "Alice", 
    "age": 15, 
    "city": "New York" 
    },
    
        { 
            "name": "Rick", 
            "age": 21, 
            "city": "California" 
            }
];


function compareByAge(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }

  studentObj.sort(compareByAge);
  console.log(studentObj);
  