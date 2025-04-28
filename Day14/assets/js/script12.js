// 12. Implement search functionality using Fetch API. 

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a search term');
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
     
      resultsList.innerHTML = '';

      if (data.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
        return;
      }

      data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.phone; 
        resultsList.appendChild(li);
        console.log(resultsList);
        
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});