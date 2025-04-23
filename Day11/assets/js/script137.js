// JS137. Store last visited page in LocalStorage and display it on the next visit. 


var items = [{ 'url': window.location.href }];
const location1 = document.getElementById('location');
var location = localStorage.setItem('testObject', JSON.stringify(items));


location1.appendChild(localStorage.getItem(JSON.parse(items)));
