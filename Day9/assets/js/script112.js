// JS112. Change the text color of all paragraphs using querySelectorAll(). 

const cText = document.getElementById("btn");

cText.onclick = function(){

 
    let elements = document.querySelectorAll("p");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
    
}

