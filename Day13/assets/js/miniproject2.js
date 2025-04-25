// Movie Search App (Fetch API + Async/Await) 






// const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=fd7b647b`;
fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd7b647b`)
    .then(response => response.json())
    .then(data => console.log(data));



document.addEventListener('DOMContentLoaded', function () {
    fetchmovies();
});

function fetchmovies() {
    // omdb API key
    const apiKey = "fd7b647b";


    const MoviesGrid = document.
        getElementById('MoviesGrid');


    MoviesGrid.innerHTML =
        '<p>Loading movies...</p>';

    const randomSearchTerms =
        ['action', 'comedy', 'drama', 'adventure'];
    const randomTerm = randomSearchTerms[
        Math.floor(Math.random() *
            randomSearchTerms.length)];



    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd7b647b`)
        .then(response => response.json())
        .then(data => {
            if (data.Search && data.Search.length > 0) {
                moviestoshow(data.Search);
            } else {
                MoviesGrid.innerHTML =
                    '<p>No random movies found!</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching random movies:', error);
            MoviesGrid.innerHTML =
                '<p>Error fetching movies. Please try again later.</p>';
        });
}

function searchMovies() {

    const apiKey = "fd7b647b";
    const searchInput = document.
        getElementById('searchInput').value;


    const MoviesGrid = document.
        getElementById('MoviesGrid');


    if (searchInput.trim() !== '') {


        MoviesGrid.innerHTML = '<p>Loading movies...</p>';

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd7b647b`)
            .then(response => response.json())
            .then(data => {
                if (data.Search && data.Search.length > 0) {
                    moviestoshow(data.Search);
                } else {
                    MoviesGrid.innerHTML =
                        '<p>No movies found with the given name!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                MoviesGrid.innerHTML =
                    '<p>Error fetching movies. Please try again later.</p>';
            });
    } else {
        alert('Enter a movie title then search!');
    }
}

function moviestoshow(movies) {
    const MoviesGrid = document.
        getElementById('MoviesGrid');


    MoviesGrid.innerHTML = '';


    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
          <h2>${movie.Title}</h2>
          <p>${movie.Year}</p>
        `;

        MoviesGrid.appendChild(movieCard);
    });
}


