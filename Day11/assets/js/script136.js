// JS136. Save form input values temporarily in SessionStorage and restore on page reload. 

const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');


nameElement.innerText = sessionStorage.getItem('myName');

nameInput.addEventListener('input',(e)=>{
  sessionStorage.setItem('myName',e.target.value);
  nameElement.innerText =sessionStorage.getItem('myName');

})