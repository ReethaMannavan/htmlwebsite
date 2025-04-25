// JS164. Filter JSON data to display only objects matching a specific condition. 


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

const arr1 = studentObj.filter(d => d.age > 18);
console.log(arr1);

