// JS139. Save and retrieve a to-do list using LocalStorage with JSON. 

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')




function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");


    var newDiv = document.createElement("p");
    newDiv.setAttribute('id', candidate.value);
    newDiv.appendChild(document.createTextNode(candidate.value));
    
    a.appendChild(newDiv);
    
   
}




btn1.addEventListener('click',addItem)



