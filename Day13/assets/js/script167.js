// JS167. Create a function that adds new objects to an existing JSON file.




// Read the contents of the JSON file
import data from "./assets/js/data3.json";
// Parse the JSON data into a JavaScript object
const jsonData = JSON.parse(data);

console.log("Before Adding data",JSON.stringify(jsonData, null, 4));

// Modify the JavaScript object by adding new data
jsonData.users.push({
    name: "James Den",
    email: "james.den@example.com",
    phonenumber: "xxxxxxxxxx"
});


// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);

fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
  if (err) throw err;
  console.log('Data added to file');
});

const update_data = fs.readFileSync('data.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data",JSON.stringify(updated_jsonData, null, 4));