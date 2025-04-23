// 2: Notes App with LocalStorage 


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')





const a = document.getElementById("list");
const candidate = document.getElementById("candidate");


const newDiv = document.createElement("p");



btn1.addEventListener('click',()=>{


    newDiv.setAttribute('id', candidate.value);
    newDiv.appendChild(document.createTextNode(candidate.value));
    
    a.appendChild(newDiv);
    load();
})

function load()
{
  let noteslist = localStorage.getItem('data') ;

     localStorage.setItem('data',JSON.stringify(newDiv));
     console.log(noteslist);
     
}




function removeItem() {

    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");

    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}

btn2.addEventListener('click',removeItem)