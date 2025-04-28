// 10. Load data from an API when a button is clicked. 

const button = document.getElementById('btn');

button.addEventListener('click',()=>{fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => jokes(data));})





function jokes(data) {
    const joke = document.getElementById('joke');
    const newJoke = document.createElement('p');
    newJoke.innerText = data.setup;
    joke.append(newJoke);
}