// JS163. Modify a JSON object inside an array and update it. 

let studentObj = [{ 
    "name": "Alice", 
    "age": 25, 
    "city": "New York" 
    }];

    for(let obj of studentObj){
        if(obj.name === "Alice")
             obj.city = "California"; 
        }

console.log(studentObj);;
