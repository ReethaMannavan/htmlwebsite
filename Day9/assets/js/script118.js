// JS118. Change the text input value dynamically. 


const head = document.getElementById('head');
const btn = document.getElementById('btn');


const login = document.getElementById("login");

const login_form = document.forms.login;

const element = login_form.name;

login_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    head.innerText = element.value;
})