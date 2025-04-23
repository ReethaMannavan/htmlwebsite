// JS153. Implement a search function to find objects dynamically. 

const searchBar = document.getElementById("search-bar");
const resultsContainer = document.getElementById("results-container");
const movieUnavailableTxt = document.getElementById("movie-unavailable-txt");
let movieList;
let searchValue;
let searchedMovies;

const renderMovies = (movies) => {
    resultsContainer.innerHTML = ""; // Clear the existing movies
    movieUnavailableTxt.style.display = "none"; // Hide the "No movies found" message
    moviesReturnedOnSearch = []; // Clear the movies returned on search array
   
    movies.forEach((movie) => {
      resultsContainer.innerHTML += `
        <div class="movie-cards">
          <img src="${movie.image}" alt="movie image" class="movie-image" />
          <h2 class="title">${movie.title}</h2>
          <p class="plot">${movie.description}</p>
          <p class="date">${movie.year}</p>
        </div>
      `;
   
      moviesReturnedOnSearch.push(movie); // Add the movies that are a result to the search input value
    });
   };

   // Event listener and handler for search bar input
searchBar.addEventListener("input", (event) => {
    searchValue = event.target.value.trim().toLowerCase();
   
    // Filter movies based on search input
    const filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue),
    );
   
    // Render the filtered movies on the page
    renderMovies(filteredMovies);
   
    if (moviesReturnedOnSearch.length <= 0) {
      movieUnavailableTxt.style.display = "block"; // Show the "No movies found" message if no movies match the search
    }
   });


