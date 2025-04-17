// JS125. Prevent the default behavior of a form submission. 


document.getElementById("myForm").addEventListener("submit", 
    function(event) { 
    event.preventDefault(); 
    let name = document.getElementById("nameInput").value; 
    document.getElementById("result").innerText = "Hello, " + name + "!"; 
    }); 

