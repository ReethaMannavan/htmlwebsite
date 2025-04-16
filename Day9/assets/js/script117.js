// JS117. Remove all elements inside a div. 



const removeall = document.getElementById("btn");

removeall.onclick = function () {
    const allElement = document.querySelectorAll(".division > p");
    allElement.innerHTML = '';
}


