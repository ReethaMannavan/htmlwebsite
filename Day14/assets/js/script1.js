// 1. Fetch a random joke from an API and show it on the page. 



fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => jokes(data));



function jokes(data) {
    const joke = document.getElementById('joke');
    const newJoke = document.createElement('p');
    newJoke.innerText = data.setup;
    joke.append(newJoke);
}