//  Use AJAX to fetch and display comments dynamically.

let xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true); 
xhr.onload = function() { 
if (xhr.status === 200) { 
console.log(JSON.parse(xhr.responseText)); 
} 
}; 
xhr.send(); 

